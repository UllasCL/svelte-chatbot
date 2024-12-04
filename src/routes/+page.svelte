<script>
  import FaqHeader from '$lib/components/FaqHeader.svelte';
  import FaqList from '$lib/components/FaqList.svelte';
  import { faqs } from '$lib/data/faq';

  let searchQuery = $state('');

  function handleSearch(event) {
    searchQuery = event.detail;
  }
</script>

<svelte:head>
  <title>FAQ - Frequently Asked Questions</title>
  <meta name="description" content="Find answers to commonly asked questions" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
  <div class="container mx-auto px-4 py-12">
    <FaqHeader {searchQuery} onSearch={handleSearch} />
    <FaqList {faqs} {searchQuery} />
  </div>
</div>