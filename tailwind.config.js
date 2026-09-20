/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        sans: ['Inter', 'DM Sans', 'sans-serif'],
      },
      colors: {
        ink: '#08080d',
        panel: '#11111a',
        violet: '#7c3aed',
        fuchsia: '#c026d3',
      },
    },
  },
  plugins: [],
}
