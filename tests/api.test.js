const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const mongoose = require('mongoose')

console.log('testing....')

const helper = require('./test_helper')
const Author = require('../models/author')
// console.log('found models', helper, Author)

test('some test', () => {
  assert.equal(1, 1)
})




// after(async () => {
//   await mongoose.connection.close()
// })

