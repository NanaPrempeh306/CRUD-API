const authorsRouter = require('express').Router()

const Author = require('../models/author')
const Book = require('../models/book')

const { tokenExtractor, userExtractor } = require('../utils/middleware')



authorsRouter.get('/', async (request, response) => {
  const authors = Author.find({}).populate('books', { title: 1 }).cursor();
  const result = [];

  for await (const author of authors) {
    result.push(author);
  }
  response.json(result);
});



// GET a single author
authorsRouter.get('/:id', async (request, response) => {
  const author = await Author.findById(request.params.id).populate('books', { title: 1 }).lean()
  if (author) {
    const transformedAuthor = {
      id: author._id,
      name: author.name,
      // Add other properties as needed
      books: author.books.map(book => ({
        id: book._id,
        title: book.title
      })),
      biography: author.biography
    }
    response.json(transformedAuthor)
  } else {
    response.status(404).send({ message: 'Author not found' })
  }
})


// POST a new author
authorsRouter.post('/', [tokenExtractor,userExtractor], async (request, response) => {
  const user = request.user
  const { name, biography} = request.body

  if (!user.isAdmin) {
    return response.status(401).json({ error: 'Unauthorized access' })
  }

  
  if (!name) {
    return response.status(400).json({ error: 'Missing required field name' })
  }
  
  const author = new Author({
    name,
    biography
  })

  const savedAuthor = await author.save()
  response.status(201).json(savedAuthor)
})



authorsRouter.delete('/:id', [tokenExtractor,userExtractor], async (request, response) => {
  const user = request.user
  if (!user.isAdmin) {
    return response.status(401).json({ error: 'Unauthorized access' })
  }

  const authorId = request.params.id

  // Use a transaction to ensure atomicity
  const session = await Author.startSession()
  session.startTransaction()

  try {
    // Delete the author and related books
    const author = await Author.findByIdAndDelete(authorId).session(session);
    if (!author) {
      return response.status(404).json({ message: 'Author not found' });
    }
    await Book.deleteMany({ author: authorId }).session(session);
    // Commit the transaction
    await session.commitTransaction();
    session.endSession()

    response.status(204).end()
  } catch (error) {
    // Abort transaction on error
    await session.abortTransaction()
    session.endSession();

    // Handle error
    response.status(500).json({ message: 'Failed to delete author and related books' })
  }
});




module.exports = authorsRouter