// Handling Middleware
const jwt = require('jsonwebtoken')
const logger = require('./logger')

const extractDuplicatedKey = (errorMessage) => {
  const regex = /{([^:]+):/;
  const match = errorMessage.match(regex);
  return match && match[1].trim();
}


const validateUser = (request, response, next) => {
  const { username, password, email } = request.body;

  if (!username || !password || !email) {
    return response.status(400).json({ error: 'username, password, and email are required' });
  }

  if (password.length < 5 || username.length < 5) {
    return response.status(400).json({ error: 'username and password must be at least 5 characters long' });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return response.status(400).json({ error: 'invalid email format' });
  }

  next();
};


const requestLogger = (request, response, next) => {
  logger.info('Method', request.method)
  logger.info('Path', request.path)
  logger.info('Body', request.body)
  logger.info('---')
  next()
}

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    request.token = authorization.replace('Bearer ', '')
  }
  next()
}

const userExtractor = (request, response, next) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'Authentication credentials were not provided' })
  }
  request.user = decodedToken
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}


const errorHandler = (error, request, response, next) => {
  // logger.error('Error data',error)
  // logger.error(error.name)
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
    const duplicateKey = extractDuplicatedKey(error.message)
    return response.status(400).json({ error: `expected '${duplicateKey}' to be unique` })
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({ error: 'Authentication credentials were not provided' })
  } else if (error.name === 'TokenExpiredError') {
    return response.status(401).json({ error: 'token expired' })
  }

  next(error)
}


module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
  userExtractor,
  validateUser
}