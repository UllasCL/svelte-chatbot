<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /** @type {string} */
  let { value = '' } = $props();

  function handleInput(event) {
    const query = event.target.value;
    dispatch('search', query);
  }
</script>

<div class="relative max-w-2xl mx-auto">
  <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <input
    type="text"
    value={value}
    on:input={handleInput}
    placeholder="Search for answers..."
    class="w-full pl-12 pr-4 py-4 text-lg bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
  />
</div>