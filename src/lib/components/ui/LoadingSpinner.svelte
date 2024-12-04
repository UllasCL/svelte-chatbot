<script>
  /** @type {string} */
  let { size = '24px' } = $props();
  /** @type {string} */
  let { color = 'currentColor' } = $props();
</script>

<div 
  class="spinner"
  style="width: {size}; height: {size}; border-color: {color}"
  aria-label="Loading"
>
  <span class="sr-only">Loading...</span>
</div>

<style>
  .spinner {
    border: 2px solid;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>