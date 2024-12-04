<script>
  import FaqItem from './FaqItem.svelte';
  import NoResults from './NoResults.svelte';
  import { filterFaqs } from '$lib/utils/faq';
  
  let { faqs, searchQuery = '' } = $props();

  let filteredFaqs = $derived(filterFaqs(faqs, searchQuery));
  let showNoResults = $derived(searchQuery.length > 0 && filteredFaqs.length === 0);
</script>

<section class="faq-list">
  {#each filteredFaqs as faq (faq.id)}
    <FaqItem question={faq.question} answer={faq.answer} />
  {/each}

  {#if showNoResults}
    <NoResults {searchQuery} />
  {/if}
</section>

<style>
  .faq-list {
    margin-top: 2rem;
  }
</style>