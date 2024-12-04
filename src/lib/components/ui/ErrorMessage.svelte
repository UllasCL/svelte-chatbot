<script>
  /** @type {string} */
  let { message } = $props();
</script>

<div class="error-message" role="alert">
  <svg 
    class="icon" 
    viewBox="0 0 20 20" 
    fill="currentColor"
  >
    <path 
      fill-rule="evenodd" 
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
      clip-rule="evenodd"
    />
  </svg>
  <span>{message}</span>
</div>

<style>
  .error-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    border-radius: 0.375rem;
    background-color: #fee2e2;
    color: #dc2626;
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }
</style>