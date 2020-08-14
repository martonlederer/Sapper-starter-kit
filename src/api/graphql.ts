import axios from 'axios'

interface GraphQLQuery {

  query: string,
  variables: Record<string, any>

}

async function query ({ query, variables }: GraphQLQuery): Promise<Record<string, any>> {

  let res: Record<string, any>
  await axios({ 

    url: '/graphql',
    method: 'post', 
    headers: { 'Content-Type': 'application/json' }, 
    data: { query, variables } 
    
  })
    .then(response => res = response.data.data)
    .catch(error => { throw new Error(error.message) })

  return res

}

export default query