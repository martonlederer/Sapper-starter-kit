import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolverMap'
import { GraphQLSchema } from 'graphql'

let typeDefs = `type Query {
  
  helloWorld: String!

}`

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers })

export default schema