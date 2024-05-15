const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  },
  isbn: {
    type: String,
    unique: true
  },
  imageUrl: {
    type: String,
    default: 'None'
  },
  price: Number,
  description: String,
  genre: String,
  quantity: Number
})


bookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Book', bookSchema)