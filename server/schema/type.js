const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,

  GraphQLInt,
  GraphQLList,
} = require('graphql')

const Book = require('../models/book')

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLList(GenreType),
    },
    author: {
      type: GraphQLList(AuthorType),
    },
    desc: {
      type: GraphQLString,
    },
    slug: {
      type: GraphQLString,
    },
  }),
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, arg) {
        console.log('es')
        return Book.find({ author: { $all: [parent.id] } })
          .populate('author')
          .populate('genre')
      },
    },
    slug: {
      type: GraphQLString,
    },
  }),
})

const GenreType = new GraphQLObjectType({
  name: 'Genre',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, arg) {
        
        return Book.find({ genre: { $all: [parent.id] } })
          .populate('author')
          .populate('genre')
      },
    },
    slug: {
      type: GraphQLString,
    },
  }),
})

const MutationGenreType = new GraphQLObjectType({
  name: 'MutationGenre',
  fields: () => ({
    status: {
      type: GraphQLString,
    },
    message: {
      type: GraphQLString,
    },
    data: {
      type: GenreType,
    },
  }),
})

const MutationBookType = new GraphQLObjectType({
  name: 'MutationBook',
  fields: () => ({
    status: {
      type: GraphQLString,
    },
    message: {
      type: GraphQLString,
    },
    data: {
      type: BookType,
    },
  }),
})

const MutationAuthorType = new GraphQLObjectType({
  name: 'MutationAuthor',
  fields: () => ({
    status: {
      type: GraphQLString,
    },
    message: {
      type: GraphQLString,
    },
    data: {
      type: AuthorType,
    },
  }),
})

module.exports = {
  BookType,
  AuthorType,
  GenreType,
  MutationAuthorType,
  MutationBookType,
  MutationGenreType,
}
