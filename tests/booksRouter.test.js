const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const mongoose = require('mongoose')

const helper = require('./test_helper')
const Author = require('../models/author')
const Book = require('../models/book')

describe('when there is initially some books in db', () => {
  beforeEach(async () => {
    await Book.deleteMany({})
    await Book.insertMany(helper.initialBooks)
  })

  test('books are returned as json', async () => {
    await api
      .get('/api/books')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all books are returned', async () => {
    const response = await api.get('/api/books')
    assert.strictEqual(response.body.length, helper.initialBooks.length)
  })
})