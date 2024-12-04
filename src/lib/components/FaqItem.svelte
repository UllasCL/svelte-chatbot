<script>
  /** @type {{ question: string; answer: string }} */
  let { question, answer } = $props();
  
  let isOpen = $state(false);

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<div class="bg-white rounded-xl shadow-sm overflow-hidden mb-4 transition-all duration-200 hover:shadow-md">
  <button
    class="w-full px-6 py-4 text-left flex justify-between items-center"
    on:click={toggle}
    aria-expanded={isOpen}
  >
    <span class="text-lg font-medium text-gray-900">{question}</span>
    <span class="ml-6 flex-shrink-0">
      <svg
        class="w-6 h-6 text-blue-500 transform transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  </button>
  
  {#if isOpen}
    <div class="px-6 pb-4 text-gray-600" transition:slide>
      {answer}
    </div>
  {/if}
</div>