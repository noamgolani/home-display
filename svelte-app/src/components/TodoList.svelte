<script>
	import Checkbox from 'carbon-icons-svelte/lib/Checkbox.svelte';
	import CheckboxChecked from 'carbon-icons-svelte/lib/CheckboxChecked.svelte';

	let todoList = [
		{
			id: 1,
			text: 'Learn Svelte',
			done: false
		},
		{
			id: 2,
			text: 'Do Assignment',
			done: false
		},
		{
			id: 3,
			text: 'Do Laundry',
			done: true
		}
	];
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
