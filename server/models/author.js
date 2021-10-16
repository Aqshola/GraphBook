const mongoose = require('mongoose')
const schema = mongoose.Schema

const authorSchema = new schema({
  name: String,
  age: Number,
  slug: String,
})

authorSchema.pre('save', function (next) {
  this.slug = this.name.split(' ').join('-')
  next()
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author
