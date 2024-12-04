/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'theme-1': 'var(--color-theme-1)',
        'theme-2': 'var(--color-theme-2)',
      },
    },
  },
  plugins: [],
}