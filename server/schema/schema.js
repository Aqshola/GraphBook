const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql')
const _ = require('lodash')

const authorMutation = require('./Author/mutation')
const authorQuery = require('./Author/query')
const bookMutation = require('./Book/mutation')
const bookQuery = require('./Book/query')

const genreMutation = require('./Genre/mutation')
const genreQuery = require('./Genre/query')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...genreQuery,
    ...authorQuery,
    ...bookQuery,
  },
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...authorMutation,
    ...bookMutation,
    ...genreMutation,
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})
