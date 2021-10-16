const mongoose = require('mongoose')

const schema = mongoose.Schema

const bookSchema = new schema({
  title: String,
  genre: [{ type: schema.Types.ObjectId, ref: 'Genre' }],
  author: [{ type: schema.Types.ObjectId, ref: 'Author' }],
  desc: String,
  slug: String,
})

bookSchema.pre('save', function (next) {
  this.slug = this.title.split(' ').join('-')
  next()
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
