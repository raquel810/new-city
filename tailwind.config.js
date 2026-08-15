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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
