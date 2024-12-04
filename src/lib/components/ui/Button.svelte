<script>
  /** @type {string} */
  let { variant = 'primary' } = $props();
  /** @type {string} */
  let { size = 'medium' } = $props();
  /** @type {boolean} */
  let { disabled = false } = $props();

  const variants = {
    primary: 'bg-theme-1 hover:bg-theme-2 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border-2 border-theme-1 text-theme-1 hover:bg-theme-1 hover:text-white'
  };

  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };

  $derived.classes = `
    ${variants[variant]}
    ${sizes[size]}
    rounded-lg
    transition-colors
    duration-200
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;
</script>

<button 
  class={$derived.classes} 
  {disabled}
  on:click
>
  <slot />
</button>