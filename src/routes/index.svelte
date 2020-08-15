<script lang="ts">

  import usersQuery from '../api/queries/users.graphql'
  import userQuery from '../api/queries/user.graphql'
  import query from '../api/graphql.ts'
  import { fade } from 'svelte/transition'

  const 
    users = getUsers(),
    exampleUser = getUser(10)
  
  async function getUsers(): Promise<Record<string, any>[]> {

    if(!process.browser) return
    let res: Record<string, any> = await query({ query: usersQuery })
    return res.users

  }

  async function getUser(id: number): Promise<Record<string, any>> {

    if(!process.browser) return
    let res: Record<string, any> = await query({ query: userQuery, variables: { id } })
    return res

  }
  
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="page test home">
  <h1>Great success!</h1>
  <h2>Users:</h2>
  <ul class="users">
    {#await users}
      Loading...
    {:then res}
      {#each res as user}
        <li in:fade={{ duration: 300 }}>{user.name} (ID: {user.id})</li>
      {/each}
    {:catch error}
      {error}
    {/await}
  </ul>
  <h2>Get one user by id 10:</h2>
  {#await exampleUser}
    Loading...
  {:then { user }}
    <h3 in:fade={{ duration: 300 }}>{user.name} (id: {user.id})</h3>
  {/await}
  <figure>
    <img alt="Borat" src="great-success.png" />
    <figcaption>HIGH FIVE!</figcaption>
  </figure>
  <p>
    <strong>
      Try editing this file (src/routes/index.svelte) to test live reloading.
    </strong>
  </p>
</div>

<style lang="sass">

  .home
    h1
      font-size: 3em
      color: $primary-color

    ul.users
      margin: 0
      padding: 0

      li
        list-style: none
        border: 1px solid #eeffee
        border-radius: 5px
        padding: 10px 14px
        color: #000
        font-size: 2em

    img
      width: 80vw

</style>
