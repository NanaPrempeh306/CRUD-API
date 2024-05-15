const bcrypt = require('bcrypt')
const adminRouter = require('express').Router()
const User = require('../models/user')
const { validateUser } = require('../utils/middleware')



adminRouter.post('/', validateUser, async (request, response) => {
  const { username, name, password, email } = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    password: passwordHash,
    email,
    isAdmin: true
  })

  const newAdmin = await user.save()
  response.status(201).json(newAdmin)
})


module.exports = adminRouter
