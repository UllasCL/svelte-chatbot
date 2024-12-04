<script>
  import AiAnswer from './AiAnswer.svelte';
  
  let { searchQuery = '' } = $props();
</script>

<div class="no-results">
  <p>No matching questions found in our FAQ database.</p>
  <AiAnswer question={searchQuery} />
</div>

<style>
  .no-results {
    text-align: center;
    padding: 2rem;
    color: #64748b;
  }
</style>