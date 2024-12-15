<script lang="ts">
  import maslow from "$lib/maslow";
  import Chat from "$lib/components/chat.svelte";
  import Input from "$lib/components/input.svelte";
  import { history } from "$lib/stores/history";
  import { tick } from "svelte";

	let content: string = '';
	let processing: boolean = false;

  let container: HTMLDivElement;
  history.subscribe(async () => {
    if (container) {
      await tick();
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'instant'
      });
    }
  });

  const enter = async () => {
    processing = true;
    const input = content;
    content = '';
    await maslow.send(input);
    processing = false;
  }
</script>

<div class="flex flex-col flex-grow justify-between space-y-4">
	<div bind:this={container} class="flex-grow h-full overflow-auto rounded-l-3xl bg-gray-100 p-4 px-8 pt-12 space-y-2">
		{#each $history as message}
			<Chat content={message.content} user={message.role == 'user'} />
		{/each}
	</div>
	<Input class="p-3 bg-gray-100" bind:value={content} placeholder={processing ? 'Thinking...' : 'Write a message'} enter={enter} disabled={processing} focusable />
</div>