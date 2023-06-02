<script lang="ts">
	import { invalidate } from '$app/navigation';
	import Dog from '$lib/Dog.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		DOGS
	</h1>
	<div>
		<button	on:click="{() => invalidate('https://dog.ceo/api/breeds/image/random')}">
			Change dog
		</button>
	</div>
	<Dog src="{data.dog.message}"/>
</section>

<style>
</style>
