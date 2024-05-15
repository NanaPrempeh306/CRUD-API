const cartsRouter = require('express').Router()

const Cart = require('../models/cart')
const CartItem = require('../models/cartItem')
const Book = require('../models/book')
const { 
  cartCreateSerializer, 
  cartItemCreateSerializer, 
  cartItemSerializer, 
  cartSerializer
} = require('../serializers/cart')



// Create a new cart
cartsRouter.post('/', async (request, response) => {
  const cart = await Cart.create({});
  const serializedCart = cartCreateSerializer(cart)
  response.status(201).json(serializedCart)
})


// Get cart
cartsRouter.get('/:cartId', async (request, response) => {
  const { cartId } = request.params

  const cartItems = await CartItem.find({ cart: cartId }).lean().populate('book')

  const serializedCart = cartSerializer(cartId, cartItems)
  response.json(serializedCart)
})

// Delete a cart
// cartsRouter.delete('/:cartId', async (request, response) => {
//   const { cartId } = request.params
//   // check if cart exists
//   const cart = await Cart.findById(cartId)
//   if (!cart) {
//     return response.status(404).json({ message: 'Cart not found' })
//   }

//   // Delete associated cart items
//   await CartItem.deleteMany({ cart: cartId })

//   // Delete the cart
//   await Cart.findByIdAndDelete(cartId)

//   response.status(204).end()
// })


cartsRouter.delete('/:cartId', async (request, response) => {
  const { cartId } = request.params;

  // Use a transaction to ensure atomicity
  const session = await Cart.startSession();
  session.startTransaction();

  try {
    // Delete associated cart items
    await CartItem.deleteMany({ cart: cartId }).session(session);

    // Delete the cart
    await Cart.findByIdAndDelete(cartId).session(session);

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    response.status(204).end();
  } catch (error) {
    // Abort transaction on error
    await session.abortTransaction();
    session.endSession();

    // Handle error
    response.status(500).json({ message: 'Failed to delete cart and cart items' });
  }
});


// Get cart items
cartsRouter.get('/:cartId/items', async (request, response) => {
  const { cartId } = request.params
  const cartItems = await CartItem.find({ cart: cartId }).lean().populate('book')

  const serializedCartItems = cartItemSerializer(cartItems)
  response.json(serializedCartItems)
})

cartsRouter.post('/:cartId/items', async (request, response) => {
  const { cartId } = request.params
  const body = request.body

  if (!body.bookId || !body.quantity) {
    return response.status(400).json({ message: 'Missing required fields' })
  }

  // Check if book exists
  const book = await Book.findById(body.bookId)
  if (!book) {
    return response.status(404).json({ message: 'Book not found' })
  }

  // Check if the book already exists in the cart
  let existingCartItem = await CartItem.findOneAndUpdate(
    { cart: cartId, book: body.bookId },
    { $inc: { quantity: body.quantity } },
    { upsert: true, new: true }
  )

  const serializedCartItem = cartItemCreateSerializer(existingCartItem)
  response.status(200).json(serializedCartItem)
})


// Add items to cart
// cartsRouter.post('/:cartId/items', async (request, response) => {
//   const { cartId } = request.params
//   const body = request.body

//   if (!body.bookId || !body.quantity) {
//     return response.status(400).json({ message: 'Missing required fields' })
//   }

//   // Check if book exists
//   const bookToAdd = await Book.findById(body.bookId)
//   if (!bookToAdd) {
//     return response.status(404).json({ message: 'Book not found' })
//   }

//   // Check if the book already exists in the cart
//   let existingCartItem = await CartItem.findOne({ cart: cartId, book: body.bookId })

//   if (existingCartItem) {
//     // If the book exists, update the quantity
//     existingCartItem.quantity += body.quantity
//     await existingCartItem.save()
//     const serializedCartItem = cartItemCreateSerializer(existingCartItem)
//     return response.status(200).json(serializedCartItem)
//   }

//   const cartItem = new CartItem({
//     cart: cartId,
//     book: body.bookId,
//     quantity: body.quantity
//   })

//   // check if book exists
//   const book = await Book.findById(body.bookId)
//   if (!book) {
//     return response.status(404).json({ message: 'Book not found' })
//   }

//   const newCartItem = await cartItem.save()
//   const serializedCartItem = cartItemCreateSerializer(newCartItem)
//   response.status(201).json(serializedCartItem)

// })

// Get an item in cart
cartsRouter.get('/:cartId/items/:cartItemId', async (request, response) => {
  const { cartId, cartItemId } = request.params

  // check if cart exists
  const cart = await Cart.findById(cartId)
  if (!cart) {
    return response.status(404).json({ message: 'Cart not found' })
  }

  const cartItem = await CartItem.findById(cartItemId).populate('book')
  if (!cartItem) {
    return response.status(404).json({ message: 'Cart item not found' })
  }
  const serializedCartItem = cartItemSerializer(cartItem)
  response.json(serializedCartItem)
})


// Edit items in cart
cartsRouter.put('/:cartId/items/:cartItemId', async (request, response) => {
  const { cartId, cartItemId } = request.params
  const { quantity } = request.body

  if (!quantity) {
    return response.status(400).json({ message: 'Missing required fields' })
  }

  const cartItem = await CartItem.findById(cartItemId)
  if (!cartItem) {
    return response.status(404).json({ message: 'Cart item not found' })
  }

  cartItem.quantity = quantity
  await cartItem.save()
  const serializedCartItem = cartItemCreateSerializer(cartItem)
  response.status(200).json(serializedCartItem)
})


// Delete an item in cart
cartsRouter.delete('/:cartId/items/:cartItemId', async (request, response) => {
  const { cartId, cartItemId } = request.params;

  const cartItem = await CartItem.findById(cartItemId);

  if (!cartItem) {
    return response.status(404).json({ message: 'Cart item not found' });
  }

  await cartItem.deleteOne();

  return response.status(204).end();
});



module.exports = cartsRouter