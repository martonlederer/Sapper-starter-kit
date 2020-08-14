<script lang="ts">
  
  let test: string = 'test'

</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="page test">
	<h1>Great success! {test}</h1>
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

<style lang="sass" type="text/sass">

	h1
    font-size: 3em

</style>
