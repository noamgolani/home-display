<script>
	import 'carbon-components-svelte/css/g90.css';
	import Time from '../components/Time.svelte';
</script>

<div class="container">
	<h1>Home Display</h1>
	<Time />
</div>

<style>
	h1 {
		font-weight: bold;
	}
	.container {
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;
	}
</style>
