const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
  cart: {
    type: mongoose.Schema.Types.UUID,
    ref: 'Cart'
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  },
  quantity: Number
})


cartItemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  } 
})


module.exports = mongoose.model('CartItem', cartItemSchema)

