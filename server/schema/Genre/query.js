const Genre = require('../../models/genre')
const { GenreType } = require('../type')
const { GraphQLID, GraphQLList, GraphQLString } = require('graphql')

const genreQuery = {
  genre: {
    type: GenreType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Genre.findById(args.id)
    },
  },
  genreName: {
    type: GenreType,
    args: { name: { type: GraphQLString } },
    resolve(parent, args) {
      return Genre.findOne({ name: new RegExp(args.name, 'i') })
    },
  },

  genres: {
    type: new GraphQLList(GenreType),
    resolve() {
      return Genre.find({})
    },
  },
}

module.exports = genreQuery
