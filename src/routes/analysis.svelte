<script lang="ts">
  import Input from "$lib/components/input.svelte";
  import maslow from "$lib/maslow";
  import { history } from "$lib/stores/history";

  let content: string = '';
  let processing: boolean = false;
  let analysis: string;
  
  const enter = async () => {
    processing = true;
    const input = content;
    analysis = await maslow.analyse(input);
    processing = false;
  }

  let hist: Message[] = [];
  history.subscribe(h => hist = h);
</script>

<div class=" w-[340px] flex flex-col space-y-4">
  <!-- User Input -->
  <div class="bg-gray-100 p-4 rounded-3xl space-y-4">
    <!-- Instruction -->
    <p class="flex flex-col space-y-2 text-gray-600 text-sm">
      <span>2. At any point in time, you may make a guess on what you think the student needs.</span>
      <span>After guessing, you may continue the conversation to guess or click 'Analyse' to receive feedback on how you may improve in the conversation.</span>
    </p>
    <!-- Chatbox -->
    <Input class="h-[180px] bg-white rounded-lg text-sm" bind:value={content} placeholder={hist.length <= 5 ? 'Please have a proper conversation with the student first before attempting to make a guess.' : processing ? 'Thhinking...' : "Write your guess for the student's need"} enter={enter} disabled={hist.length <= 5 || processing} />
  </div>
  <!-- Analysis Content -->
  <div class="flex-grow overflow-auto text-sm text-gray-900 space-y-4 p-2 rounded-3xl bg-gray-100">
    <h1 class="text-lg font-bold text-gray-800 text-center my-2">Analysis</h1>
    {#if processing}
      <p class="text-gray-600 italic">Loading analysis... Please wait...</p>
    {:else}
		  {@html analysis}
    {/if}
  </div>
</div>