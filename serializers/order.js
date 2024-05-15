const { bookSerializer } = require('./book')

const userSerializer = (user) => {
  console.log('username: ',user.username)
  return {
    id: user._id,
    username: user.username
  }
}

const orderItemSerializer = (orderItems) => {
  return orderItems.map(orderItem => ({
    id: orderItem._id,
    book: bookSerializer(orderItem.book),
    quantity: orderItem.quantity
  }))
}

const orderItemCreateSerializer = (orderItems) => {
  return orderItems.map(orderItem => ({
    id: orderItem._id,
    book: orderItem.book,
    quantity: orderItem.quantity
  }))
}

const orderSerializer = (order, orderItems) => {
  return {
    id: order._id,
    user: order.user && userSerializer(order.user),
    createdAt: order.placedAt,
    paymentStatus: order.paymentStatus,
    items: orderItemSerializer(orderItems)
  }
}


const orderCreateSerializer =  (order, orderItems) => {
  return {
    id: order._id,
    createdAt: order.createdAt,
    items: orderItemCreateSerializer(orderItems)
  }
}


module.exports = {
  orderItemSerializer,
  orderSerializer,
  orderCreateSerializer
}