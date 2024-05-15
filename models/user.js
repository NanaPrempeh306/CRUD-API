const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  name: String,
  email: {
    type: String,
    unique: true
  },
  isAdmin: { type: Boolean, default: false }
})

// userSchema.plugin(require('mongoose-unique-validator'))

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.password
    delete returnedObject.isAdmin
  }
})


module.exports = mongoose.model('User', userSchema)