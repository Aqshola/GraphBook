const Author = require('../../models/author')
const { AuthorType } = require('../type')
const { GraphQLID, GraphQLList, GraphQLString } = require('graphql')

const authorQuery = {
  author: {
    type: AuthorType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Author.findById(args.id)
    },
  },

  authors: {
    type: new GraphQLList(AuthorType),
    resolve() {
      return Author.find({})
    },
  },

  authorSlug: {
    type: AuthorType,
    args: { slug: { type: GraphQLString } },
    resolve(parent, args) {
      return Author.findOne({ slug: args.slug })
    },
  },

  authorName: {
    type: AuthorType,
    args: { name: { type: GraphQLString } },
    resolve(parent, args) {
      return Author.findOne({ name: new RegExp(args.name, 'i') })
    },
  },
}

module.exports = authorQuery
