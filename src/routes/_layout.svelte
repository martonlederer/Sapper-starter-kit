<script>

  import { onMount } from 'svelte'
  import Nav from '../components/Nav.svelte'

  export let segment
  
</script>

<Nav {segment} />

<main>
	<slot />
</main>