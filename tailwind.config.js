/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          taupe: '#949089',
          grey: '#E0E1E1',
          black: '#242019',
          cream: '#F7F6F4',
          warm: '#B8B2A8',
        },
      },
      fontFamily: {
        serif: ['amster', 'Georgia', 'serif'],
        sans: ['darkmode-on', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
