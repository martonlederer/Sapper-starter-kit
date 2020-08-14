import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {

  Query: {

    helloWorld: (_: void, args: void): boolean => true,
    users: () => [{ name: 'test', id: 1 }, { name: 'the_user', id: 2 }, { name: 'fdfdfdfd', id: 3 }],
    me: () => { return { name: 'the_user', id: 2 } },
    user: (_: void, args: void) => { return { name: 'afc', id: args['id'] } }

  }

}

export default resolverMap