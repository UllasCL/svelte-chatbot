<script>
  import { createEventDispatcher } from 'svelte';
  import { extractPdfText } from '$lib/utils/pdf';
  
  const dispatch = createEventDispatcher();
  let pdfText = $state('');
  let loading = $state(false);
  let error = $state('');

  async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file || file.type !== 'application/pdf') {
      error = 'Please upload a valid PDF file';
      return;
    }

    loading = true;
    error = '';

    try {
      const arrayBuffer = await file.arrayBuffer();
      const text = await extractPdfText(arrayBuffer);
      pdfText = text;
      dispatch('pdfContent', { text: pdfText });
    } catch (e) {
      error = 'Error reading PDF file';
      console.error('PDF processing error:', e);
    } finally {
      loading = false;
    }
  }
</script>

<div class="pdf-upload">
  <label for="pdf-file" class="upload-button">
    <span class="icon">📄</span>
    Upload PDF
  </label>
  <input
    type="file"
    id="pdf-file"
    accept=".pdf"
    on:change={handleFileUpload}
    class="file-input"
  />
  
  {#if loading}
    <div class="loading">Processing PDF...</div>
  {/if}
  
  {#if error}
    <div class="error">{error}</div>
  {/if}
</div>

<style>
  .pdf-upload {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .upload-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: var(--color-theme-1);
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .upload-button:hover {
    background-color: var(--color-theme-2);
  }

  .icon {
    font-size: 1.2rem;
  }

  .file-input {
    display: none;
  }

  .loading {
    margin-top: 0.5rem;
    color: var(--color-theme-2);
    font-size: 0.9rem;
  }

  .error {
    margin-top: 0.5rem;
    color: #ef4444;
    font-size: 0.9rem;
  }
</style>