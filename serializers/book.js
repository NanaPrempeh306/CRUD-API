const bookSerializer = (book) => {
  return {
    id: book.id,
    title: book.title,
    unitPrice: book.price
  }
}



module.exports = {
  bookSerializer
}