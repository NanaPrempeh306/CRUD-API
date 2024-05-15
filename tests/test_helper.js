const Author = require('../models/author')

const initialAuthors = [
  {
    name: "Jane Austen",
    biography: "Jane Austen was an English novelist known primarily for her six major novels,\
    which interpret, critique and comment upon the British landed gentry at the end of the 18th century."
  },
  {
    name: "Ernest Hemingway",
    biography: "Ernest Hemingway was an American novelist, short-story writer, and journalist.\
    His economical and understated style had a strong influence on 20th-century fiction, while his\
    life of adventure and his public image \influenced later generations."
  },
  {
    name: "Maya Angelou",
    biography: "Maya Angelou was an American poet, memoirist, and civil rights activist.\
    She published seven autobiographies, three books of essays, several books of poetry, and is\
    credited with a list of plays, movies, and television shows spanning over 50 years."
  }
]

const initialBooks =  [
  {
    "author": "Jane Austen",
    "title": "Pride and Prejudice",
    "isbn": "9780141439518",
    "price": 8.99,
    "description": "Follow the romantic exploits of the Bennet sisters as they navigate society and love in Regency-era England.",
    "genre": "Romance",
    "imageUrl": "None",
    "quantity": 50
  },
  {
    "author": "Jane Austen",
    "title": "Sense and Sensibility",
    "isbn": "9780141439662",
    "price": 7.99,
    "description": "Experience the trials and tribulations of the Dashwood sisters as they seek love and happiness amidst societal expectations.",
    "genre": "Romance",
    "imageUrl": "None",
    "quantity": 40
  },
  {
    "author": "Jane Austen",
    "title": "Emma",
    "isbn": "9780141439587",
    "price": 9.99,
    "description": "Enter the world of matchmaking and misunderstandings with Emma Woodhouse as she navigates the complexities of love and friendship.",
    "genre": "Romance",
    "imageUrl": "None",
    "quantity": 60
  },
  {
    "author": "Ernest Hemingway",
    "title": "The Old Man and the Sea",
    "isbn": "9780684801223",
    "price": 11.99,
    "description": "Join Santiago, an aging fisherman, on his epic struggle against a giant marlin in the Gulf Stream.",
    "genre": "Fiction",
    "imageUrl": "None",
    "quantity": 45
  },
  {
    "author": "Ernest Hemingway",
    "title": "A Farewell to Arms",
    "isbn": "9780684801469",
    "price": 10.99,
    "description": "Set during World War I, follow the love affair between an American ambulance driver and a British nurse amidst the chaos of war.",
    "genre": "Fiction",
    "imageUrl": "None",
    "quantity": 35
  },
  {
    "author": "Ernest Hemingway",
    "title": "For Whom the Bell Tolls",
    "isbn": "9780684803357",
    "price": 12.99,
    "description": "Experience the Spanish Civil War through the eyes of Robert Jordan, an American dynamiter tasked with blowing up a bridge behind enemy lines.",
    "genre": "Fiction",
    "imageUrl": "None",
    "quantity": 55
  },
  {
    "author": "Maya Angelou",
    "title": "I Know Why the Caged Bird Sings",
    "isbn": "9780345514400",
    "price": 9.99,
    "description": "Discover Maya Angelou's powerful memoir detailing her childhood struggles, resilience, and eventual triumph over adversity.",
    "genre": "Biography",
    "imageUrl": "None",
    "quantity": 30
  },
  {
    "author": "Maya Angelou",
    "title": "The Heart of a Woman",
    "isbn": "9780375500725",
    "price": 10.99,
    "description": "Continue Maya Angelou's journey as she navigates love, motherhood, and her role in the civil rights movement.",
    "genre": "Biography",
    "imageUrl": "None",
    "quantity": 25
  },
  {
    "author": "Maya Angelou",
    "title": "I Know Why the Caged Bird Sings",
    "isbn": "9780345514400",
    "price": 9.99,
    "description": "Discover Maya Angelou's powerful memoir detailing her childhood struggles, resilience, and eventual triumph over adversity.",
    "genre": "Biography",
    "imageUrl": "None",
    "quantity": 30
  }
]



const authorsInDb = async () => {
  const authors = await Author.find({})
  return authors.map(a => a.toJSON())
}



module.exports = {
  initialAuthors, authorsInDb, initialBooks
}
