<script lang="ts">
	export let content: string;
	export let user: boolean = false;
</script>

<div class="{user ? 'bg-green-200' : 'bg-gray-300'} w-fit max-w-[320px] p-2 px-4 rounded-3xl break-words {user ? 'justify-self-end' : ''} border-2">
	<p>{content}</p>
</div>