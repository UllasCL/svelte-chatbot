<script>
  import { fetchAIAnswer } from '$lib/utils/api';
  import { PUBLIC_ENABLE_AI } from '$env/static/public';
  import { ERROR_MESSAGES } from '$lib/config/constants';

  let props = $props();
  /** @type {string} */
  let question = props.question;
  /** @type {string} */
  let context = props.context ?? '';
  
  let answer = $state('');
  let loading = $state(false);
  let error = $state(false);
  let errorMessage = $state('');

  async function getAnswer() {
    if (!PUBLIC_ENABLE_AI) {
      error = true;
      errorMessage = ERROR_MESSAGES.AI_SERVICE;
      return;
    }

    loading = true;
    error = false;
    errorMessage = '';
    
    try {
      const aiResponse = await fetchAIAnswer(question, context);
      if (aiResponse) {
        answer = aiResponse;
      } else {
        error = true;
        errorMessage = ERROR_MESSAGES.AI_SERVICE;
      }
    } catch (e) {
      error = true;
      errorMessage = ERROR_MESSAGES.AI_SERVICE;
    } finally {
      loading = false;
    }
  }

  $effect(() => {
    if (question) {
      getAnswer();
    }
  });
</script>

<div class="ai-answer">
  {#if loading}
    <div class="loading">
      <span class="loader"></span>
      <p>Getting an AI-powered answer...</p>
    </div>
  {:else if error}
    <p class="error">{errorMessage}</p>
  {:else if answer}
    <div class="answer">
      <h3>AI-Generated Answer:</h3>
      <p>{answer}</p>
    </div>
  {/if}
</div>

<style>
  .ai-answer {
    margin-top: 2rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
  }

  .loading {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #64748b;
  }

  .loader {
    width: 20px;
    height: 20px;
    border: 2px solid #f3f3f3;
    border-top: 2px solid var(--color-theme-1);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .error {
    color: #ef4444;
  }

  .answer h3 {
    color: var(--color-theme-1);
    margin-bottom: 0.5rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>