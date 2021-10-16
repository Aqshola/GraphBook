const {
  GraphQLID,

  GraphQLString,

  GraphQLInt,

  GraphQLNonNull,
} = require('graphql')

const Author = require('../../models/author')
const { AuthorType } = require('../type')

const authorMutation = {
  addAuthor: {
    type: AuthorType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      age: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve(parent, args) {
      let author = new Author({
        name: args.name,
        age: args.age,
      })
      return author.save()
    },
  },
  updateAuthor: {
    type: AuthorType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      age: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve(parent, args) {
      return Author.findById(args.id).updateOne({
        name: args.name,
        age: args.age,
      })
    },
  },
  deleteAuthor: {
    type: AuthorType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parent, args) {
      Author.findByIdAndRemove(args.id)
    },
  },
}

module.exports = authorMutation
