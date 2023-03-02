<script>
	import { onMount } from 'svelte';

	let time = new Date();

	$: day = time.getDay();
	$: month = time.getMonth();

	$: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<h2>{day}/{month} - {hours}:{minutes}:{seconds}</h2>
