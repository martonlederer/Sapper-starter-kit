<script context="module" lang="ts">
	export async function preload(page, session) {
		console.log('preload!', page, session)
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte'
	import { writable } from 'svelte/store'

  import Counter from '@app/components/Counter.svelte'
  
	/**
 	*! Adding types to variables breaks preloading
 	*  TODO: Figure out why...
	*/
	//const count: Writable<number> = writable(100)
	const count = writable(100)

	onMount(() => {
		console.log('App mounted')
	})
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="page test">
	<h1>Great success!</h1>

	<figure>
		<img alt="Borat" src="great-success.png" />
		<figcaption>HIGH FIVE!</figcaption>
	</figure>

	<p>
		<strong>
			Try editing this file (src/routes/index.svelte) to test live reloading.
		</strong>
	</p>

	<p>
		<Counter />
		<Counter value={1}>Counter 1</Counter>
		<Counter value={$count} step={3}>Counter 2</Counter>
	</p>
</div>

<style lang="sass" type="text/sass">

	h1
    font-size: 3em

</style>
