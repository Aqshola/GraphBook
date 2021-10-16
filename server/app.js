const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

//connect to mongoshell
mongoose.connect(
  'mongodb+srv://user:user@cluster0.iu2jv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
)

mongoose.connection.once('open', () => console.log('sukses konek'))

const app = express()

app.use(cors())
const PORT = process.env.PORT || 5000
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(PORT, console.log(`run in port ${PORT}`))
