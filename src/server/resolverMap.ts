import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {

  Query: {

    helloWorld: (_: void, args: void): boolean => true,
    users: () => [{ name: 'test', id: 1 }],
    me: () => { return { name: 'the_user', id: 2 } }

  }

}

export default resolverMap