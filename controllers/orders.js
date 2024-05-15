const ordersRouter = require('express').Router()
const Order = require('../models/order')
const OrderItem = require('../models/orderItem')
const Cart = require('../models/cart')
const CartItem = require('../models/cartItem')
const { tokenExtractor, userExtractor } = require('../utils/middleware')
const { orderSerializer, orderCreateSerializer} = require('../serializers/order')



ordersRouter.get('/', [tokenExtractor, userExtractor], async (request, response) => {
  const user = request.user

  const orders = user.isAdmin 
    ? await Order.find({}).populate('user')
    : await Order.find({ user: user.id }).select('-user')


  if (orders.length === 0) {
    return response.status(404).json({ error: 'Orders not found' })
  }

  const orderIds = orders.map(order => order._id)
  const orderItems = await OrderItem.find({ order: { $in: orderIds } }).populate('book')
  
  const serializedOrders = orders.map(order => orderSerializer(order, orderItems.filter(item => item.order.equals(order._id))));
  response.json(serializedOrders);
})


ordersRouter.get('/:orderId', [tokenExtractor, userExtractor], async (request, response) => {
  const { orderId } = request.params
  const user = request.user
  const order = await Order.findById(orderId)

  if (!order) {
    return response.status(404).json({ error: 'Order not found' })
  }

  if (!user.isAdmin && order.user.toString() !== user.id) {
    return response.status(401).json({ error: 'Unauthorized' })
  }

  const orderItems = await OrderItem.find({ order: orderId }).populate('book')
  const serializedOrder = orderSerializer(order, orderItems)
  response.json(serializedOrder)
})


ordersRouter.post('/', [tokenExtractor, userExtractor], async (request, response) => {
  const { cartId } = request.body
  const cart = await Cart.findById(cartId)

  if (!cart) {
    return response.status(404).json({ error: 'Cart not found' })
  }

  const cartItems = await CartItem.find({ cart: cartId })
   

  if (cartItems.length === 0) {
    return response.status(400).json({ error: 'Cart is empty' })
  }

  const order = new Order({
    user: request.user.id
  })

  const savedOrder = await order.save()

  const orderItems = cartItems.map(cartItem => ({
    order: savedOrder._id,
    book: cartItem.book,
    quantity: cartItem.quantity
  }))

  await OrderItem.insertMany(orderItems)

  await CartItem.deleteMany({ cart: cartId })
  await Cart.findByIdAndDelete(cartId)

  const serializedOrder = orderCreateSerializer(savedOrder, orderItems)

  response.status(201).json(serializedOrder)
})



module.exports = ordersRouter

