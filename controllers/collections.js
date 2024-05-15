collectionsRouter = require('express').Router()
const Book = require('../models/book')




collectionsRouter.get('/', async (request, response) => {
  const { sort } = request.query;
  let sortStage = {};

  if (sort) {
    const sortOptions = sort.split(',').map(option => {
      const [field, order] = option.split(':');
      return { [field]: order === 'desc' ? -1 : 1 };
    });

    sortStage = { $sort: Object.assign({}, ...sortOptions) };
  }
  
  let aggregationPipeline = [
    { $group: { _id: '$genre', bookCount: { $sum: 1 } } },
    { $project: { genre: '$_id', bookCount: 1, _id: 0 } }
  ];

  if (Object.keys(sortStage).length !== 0) {
    aggregationPipeline.push(sortStage);
  }

  const collection = await Book.aggregate(aggregationPipeline);

  response.json(collection);
});




module.exports = collectionsRouter