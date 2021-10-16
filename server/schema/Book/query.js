const { GraphQLID, GraphQLList, GraphQLString } = require('graphql')
const Book = require('../../models/book')
const { BookType } = require('../type')

const bookQuery = {
  book: {
    type: BookType,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve(parent, args) {
      return Book.findById(args.id).populate('author').populate('genre')
    },
  },
  books: {
    type: new GraphQLList(BookType),
    resolve() {
      return Book.find({}).populate('author').populate('genre')
    },
  },
  bookSlug: {
    type: BookType,
    args: {
      slug: {
        type: GraphQLString,
      },
    },
    resolve(parent, args) {
      return Book.findOne({ slug: args.slug })
        .populate('author')
        .populate('genre')
    },
  },

  bookName: {
    type: BookType,
    args: {
      title: {
        type: GraphQLString,
      },
    },
    resolve(parent, args) {
      return Book.findOne({ title: new RegExp(args.title, 'i') })
        .populate('author')
        .populate('genre')
    },
  },

  bookTitle: {
    type: BookType,
    args: {
      title: {
        type: GraphQLString,
      },
    },
    resolve(parent, args) {
      return Book.findById({ title: args.title.toLowerCase() })
        .populate('author')
        .populate('genre')
    },
  },
}

module.exports = bookQuery
