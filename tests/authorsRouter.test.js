const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const mongoose = require('mongoose')

const helper = require('./test_helper')
const Author = require('../models/author')

describe('when there is initially some authors in db', () => {
  beforeEach(async () => {
    await Author.deleteMany({})
    await Author.insertMany(helper.initialAuthors)
  })

  test('authors are returned as json', async () => {
    await api
      .get('/api/authors')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all authors are returned', async () => {
    const response = await api.get('/api/authors')
    assert.strictEqual(response.body.length, helper.initialAuthors.length)
  })

  describe('deleting an author deletes all their books', async () => {
  })

})



after(async () => {
  await mongoose.connection.close()
})