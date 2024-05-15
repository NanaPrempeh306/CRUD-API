/*
id
created at

cart_item
cart
book
quantity

review
book
name
description
rating
date
*/

const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')


const cartSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})


cartSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Cart', cartSchema)