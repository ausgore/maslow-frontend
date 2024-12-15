<script lang="ts">
  import Analysis from "./analysis.svelte";
  import Conversation from "./conversation.svelte";

</script>

<main class="mx-auto max-w-[1200px] h-screen space-y-2 overflow-hidden pt-4 pb-32">
  <div class="pb-2 space-y-1">
    <h1 class="text-3xl font-bold">Project Maslow</h1>
    <p>1. You are a lecturer trying to understand a student's needs.<br />Start a conversation with them by sending a message at the bottom of the page.</p>
  </div>
  <div class="flex h-full gap-x-4 flex-grow">
    <Conversation />
    <Analysis />
  </div>
</main>