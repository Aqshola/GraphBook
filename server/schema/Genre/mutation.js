const {
  GraphQLID,

  GraphQLString,

  GraphQLNonNull,
} = require('graphql')

const Genre = require('../../models/genre')
const { GenreType, MutationGenreType } = require('../type')

const genreMutation = {
  addGenre: {
    type: MutationGenreType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
      return Genre.findOne({ name: new RegExp(args.name, 'i') }).then(
        (data) => {
          if (data) {
            return {
              status: 'success',
              message: 'return existing data',
              data: data,
            }
          } else {
            let genre = new Genre({
              name: args.name,
            })

            return {
              status: 'success',
              message: 'Insert Sukses',
              data: genre.save(),
            }
          }
        }
      )
    },
  },
  updateGenre: {
    type: MutationGenreType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
      return Genre.findById(args.id)
        .updateOne({
          name: args.name,
        })
        .then((data) => ({
          status: 'success',
          message: 'Update Success',
          data: data,
        }))
    },
  },
  deleteGenre: {
    type: MutationGenreType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parent, args) {
      return Genre.findByIdAndRemove(args.id).then((data) => ({
        status: 'success',
        message: 'Delete Success',
        data: data,
      }))
    },
  },
}

module.exports = genreMutation
