const mongoose = require('mongoose')

const schema = mongoose.Schema

const genreSchema = new schema({
  name: String,
})

const Book = mongoose.model('Genre', genreSchema)

module.exports = Book
