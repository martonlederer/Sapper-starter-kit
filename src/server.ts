import sirv from 'sirv'
import express from 'express'
import * as sapper from '@sapper/server'
import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import { createServer } from 'http'
import compression from 'compression'
import schema from './server/schema'

const
  { PORT, NODE_ENV } = process.env,
  dev = NODE_ENV === 'development',
  app = express(),
  server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)]
  })

server.applyMiddleware({ app, path: '/graphql' })

app.use(compression({ threshold: 0 }))
app.use(sirv('static', { dev }))
app.use(sapper.middleware())

const httpServer = createServer(app)

httpServer.listen({ port: PORT }, () => console.log(`${ '\x1b[1m' + '\x1b[32m' }✔ express apollo graphql server (port: ${ PORT })`, '\x1b[0m'))