const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

// Routers
const adminRouter = require('./controllers/admin')
const authorsRouter = require('./controllers/authors')
const booksRouter = require('./controllers/books')
const cartsRouter = require('./controllers/carts')
const collectionsRouter = require('./controllers/collections')
const loginRouter = require('./controllers/login')
const ordersRouter = require('./controllers/orders')
const usersRouter = require('./controllers/users')

mongoose.set('strictQuery', false)
// mongoose.set('strictPopulate', false)

logger.info('connecting to MongoDB')


const connectToMongoDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    logger.info('connected to MongoDB');
  } catch (error) {
    logger.error('error connecting to MongoDB:', error.message);
    await mongoose.connection.close()
  }
}

connectToMongoDB()



app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/admin', adminRouter)
app.use('/api/authors', authorsRouter)
app.use('/api/books', booksRouter)
app.use('/api/carts', cartsRouter)
app.use('/api/login', loginRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/users', usersRouter)
app.use('/api/collections', collectionsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
