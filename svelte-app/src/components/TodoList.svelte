<script lang="ts">
	import Checkbox from 'carbon-icons-svelte/lib/Checkbox.svelte';
	import CheckboxChecked from 'carbon-icons-svelte/lib/CheckboxChecked.svelte';
	import { onMount } from 'svelte';

    const api_uri = import.meta.env['VITE_API_URI'];

	let todoList: {
		text: string;
		done: boolean;
		id: string;
	}[] = [];

	async function getTodoList() {
		const response = await fetch(`${api_uri}/todo`);
		const data = await response.json();
		todoList = data;
	}

	onMount(async () => {
		await getTodoList();

		const interval = setInterval(async () => {
			await getTodoList();
		}, 10000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<ul>
	{#each todoList as todoItem, i}
		<li class="todo-item">
			{#if todoItem.done}
				<CheckboxChecked size={32} />
			{:else}
				<Checkbox size={32} />
			{/if}
			<h3>
				{todoItem.text}
			</h3>
		</li>
	{/each}
</ul>

<style>
	.todo-item {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
</style>
