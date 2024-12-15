<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { MouseEventHandler } from "svelte/elements";

	export let disabled: boolean = false;
	export let onclick: MouseEventHandler<HTMLButtonElement> = () => {};
</script>

<button class="rounded-full p-2 aspect-square transition-colors duration-100 {disabled ? 'bg-gray-400' : 'bg-gray-800'}" on:click={onclick} disabled={disabled}>
	<Icon icon="solar:map-arrow-right-bold" class=" text-white text-[18px]" />
</button>