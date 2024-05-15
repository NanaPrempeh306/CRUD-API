const { bookSerializer } = require('./book')


const cartCreateSerializer = (cart) => {
  const createdAt = new Date(cart.createdAt).toISOString().split('T')[0];
  return {
    id: cart._id,
    items: [],
    createdAt: createdAt,
  }
}



const cartItemCreateSerializer = (cartItem) => {
  return {
    book: cartItem.book,
    quantity: cartItem.quantity
  }
}


const cartItemSerializer = (cartItems) => {
  if (!Array.isArray(cartItems)) {
    // If cartItems is not an array, assume it's a single object and wrap it in an array
    cartItems = [cartItems];
  }
  return cartItems.map((item) => {
    return {
      id: item._id,
      book: bookSerializer(item.book),
      quantity: item.quantity,
      totalPrice: item.quantity * item.book.price
    }
  })
}


const cartSerializer  = (cartId, cartItems) => {
  const items = cartItemSerializer(cartItems)
  const totalPrice =  Math.round(items.reduce((total, item) => total + item.totalPrice, 0) * 100) / 100;
  return {
    id: cartId,
    items: items,
    totalPrice
  }
}


module.exports = {
  cartCreateSerializer,
  cartItemCreateSerializer,
  cartItemSerializer,
  cartSerializer
}