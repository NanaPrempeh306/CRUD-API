const mongoose = require('mongoose')
const config = require('../utils/config')
const Author = require('../models/author')
const Book = require('../models/book')
const helper = require('./helper')
// const authorsList = require('./authors')
// const booksList = require('./books')


mongoose.set('strictQuery', false)

console.log('connecting to MongoDB')

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log('connected to MongoDB');
  } catch (error) {
    console.error('error connecting to MongoDB:', error.message);
    await mongoose.connection.close()
  }
}



const populateDB = async () => {
  await Author.deleteMany({});
  await Book.deleteMany({});

  const insertedAuthors = await Author.insertMany(helper.authors);

  const authorIdMap = new Map(insertedAuthors.map(author => [author.name, author._id]));

  const booksWithAuthorIds = helper.books.map(book => {
    const author = authorIdMap.get(book.author);
    if (!author) {
      console.warn(`Skipping book "${book.title}" as author "${book.author}" not found.`);
      return null;
    }
    return { ...book, author }; // Spread existing book data and add author object
  }).filter(book => book);

  await Book.insertMany(booksWithAuthorIds);

  // Use aggregation to assign books to authors
  // const authorPipeline = [
  //   { $lookup: { from: 'books', localField: '_id', foreignField: 'author', as: 'books' } },
  //   { $out: 'authors' } // Write the result back to the 'authors' collection
  // ];

  const authorPipeline = [
    { $lookup: { from: 'books', localField: '_id', foreignField: 'author', as: 'books'} },
    { $addFields: { books: { $map: { input: '$books', as: 'book', in: '$$book._id' }}}},
    { $out: 'authors' }
  ];

  await Author.aggregate(authorPipeline);

  console.log('Database populated successfully!');
}



const init = async () => {
  await connectToMongoDB()
  console.log('starting seeding')
  await populateDB()
}

init()

// mongoose.connection.close()


