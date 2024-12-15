<script lang="ts">
  import { onMount } from "svelte";
  import Button from "$lib/components/button.svelte";

  export let value: string = '';
  export let enter: () => Promise<void> = async () => {};
  export let disabled: boolean = false;
  let classname: string = '';
  export { classname as class };
  export let focusable: boolean = false;
  export let placeholder: string = '';

  let textarea: HTMLTextAreaElement;

  onMount(() => {
    const globalKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.altKey || e.shiftKey) return;

      if (document.activeElement != textarea) {
        if (!(document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLButtonElement)) {
          textarea.focus();
          e.preventDefault();
        }
      }
    }

    if (focusable) {
      window.addEventListener('keydown', globalKeyDown);
      return () => { window.removeEventListener('keydown', globalKeyDown); }
    }
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey || e.shiftKey || e.altKey) return;
    if (e.key == 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.length) enter();
    }
  }

  const handleClick = () => value.length ? enter() : null;
</script>

<!-- flex space-x-2 bg-white p-2 rounded-lg -->
<div class="{classname} flex space-x-2 pr-2 pb-2 rounded-3xl overflow-auto py-1">
  <textarea bind:this={textarea} disabled={disabled} placeholder={placeholder} class="bg-transparent p-2 overflow-auto resize-none flex-grow w-full rounded-lg focus:outline-none" bind:value={value} on:keydown={handleKeyDown}></textarea>
  <!-- The right side -->
  <div class="self-end">
    <Button disabled={disabled} onclick={handleClick} />
  </div>
</div>