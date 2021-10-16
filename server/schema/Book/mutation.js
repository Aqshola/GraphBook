const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql')

const Book = require('../../models/book')
const Author = require('../../models/author')
const { BookType } = require('../type')

const bookMutation = {
  addBook: {
    type: BookType,
    args: {
      title: { type: new GraphQLNonNull(GraphQLString) },
      genre: { type: new GraphQLNonNull(GraphQLList(GraphQLID)) },
      author: { type: new GraphQLNonNull(GraphQLList(GraphQLID)) },
      desc: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
      let book = new Book({
        title: args.title,
        genre: args.genre,
        author: args.author,
        desc: args.desc,
      })

      return book.save()
    },
  },

  updateBook: {
    type: BookType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      genre: { type: new GraphQLNonNull(GraphQLList(GraphQLID)) },
      author: { type: new GraphQLNonNull(GraphQLList(GraphQLID)) },
      desc: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
      return Book.findOneAndUpdate(
        { id: args.id },
        {
          title: args.title,
          genre: args.genre,
          author: args.author,
          desc: args.desc,
        }
      )
    },
  },
  deleteBook: {
    type: BookType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parent, args) {
      Book.findByIdAndRemove(args.id)
    },
  },
}

module.exports = bookMutation
