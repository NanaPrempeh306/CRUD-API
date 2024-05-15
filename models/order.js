const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Complete', 'Failed'],
    default: 'Pending'
  },
  placedAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})


module.exports = mongoose.model('Order', orderSchema)