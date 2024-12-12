<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<!-- Textarea -->
  <div class="w-full flex gap-x-2 relative bg-gray-100 pr-2 pb-2 rounded-3xl min-h-[80px] max-h-[300px] overflow-auto">
    <textarea placeholder="Write a message" class="bg-transparent p-4 overflow-auto resize-none flex-grow w-full rounded-lg focus:outline-none"></textarea>
    <!-- The right side -->
    <div class="justify-end flex flex-col">
      <button class="rounded-full p-2 bg-gray-800 aspect-square">
        <Icon icon="formkit:up" class=" text-white text-[10px]" />
      </button>
    </div>
  </div>