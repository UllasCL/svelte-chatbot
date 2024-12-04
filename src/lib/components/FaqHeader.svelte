<script>
  import SearchBar from './SearchBar.svelte';
  
  let { searchQuery = '', onSearch } = $props();
</script>

<header class="text-center mb-12">
  <div class="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full mb-4 font-medium">
    FAQs
  </div>
  <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
    What can we help you find?
  </h1>
  <SearchBar value={searchQuery} on:search={onSearch} />
</header>