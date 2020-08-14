<script lang="ts">

  import usersQuery from '../api/users.graphql'
  import { onMount } from 'svelte'
  import axios from 'axios'

  const users = getUsers()
  
  async function getUsers(): Promise<Record<string, any>[]> {

    if(!process.browser) return

    let res
    await axios({ 

      url: '/graphql',
      method: 'post', 
      headers: { 'Content-Type': 'application/json' }, 
      data: { query: usersQuery } 
    
    })
      .then(response => res = response.data)
      .catch(error => { throw new Error(error.message) })

    return res.data.users

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
        <li>{user.name} (ID: {user.id})</li>
      {/each}
    {:catch error}
      {error}
    {/await}
  </ul>
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
