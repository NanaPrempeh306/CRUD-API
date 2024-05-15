const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const { tokenExtractor, userExtractor, validateUser } = require('../utils/middleware')


usersRouter.get('/', [ tokenExtractor, userExtractor ], async (request, response) => {
  const user = request.user
  const users = user.isAdmin
    ? await User.find({}).populate('username').populate('email')
    : await User.find({ username: user.username }).populate('username').populate('email')
  response.json(users)
})



usersRouter.post('/', validateUser, async (request, response) => {
  const { username, name, password, email } = request.body

  if (password.length < 5 || username.length < 5) {
    return response.status(400).json({ error: 'username and password must be at least 5 characters long' })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    password: passwordHash,
    email
  })

  const savedUser = await user.save()
  response.status(201).json(savedUser)

})


usersRouter.get('/me', [ tokenExtractor, userExtractor ], async (request, response) => {
  const user = request.user
  const userInDB = await User.findById(user.id)
  response.json(userInDB)
})


usersRouter.put('/me', [ tokenExtractor, userExtractor ], async (request, response) => {
  const user = request.user
  const { name, email } = request.body

  if (!name || !email) {
    return response.status(400).json({ error: 'name and email are required' })
  }

  const updatedUser = {
    name,
    email
  }


  const userInDB = await User.findByIdAndUpdate(user.id, updatedUser, { new: true })
  response.json(userInDB)
})


usersRouter.delete('/me', [ tokenExtractor, userExtractor ], async (request, response) => {
  const user = request.user
  await User.findByIdAndDelete(user.id)
  response.status(204).end()
})



module.exports = usersRouter
