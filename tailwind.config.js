/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{vue,js,ts}', './layouts/**/*.vue', './pages/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        finlandica: ['Finlandica', 'sans-serif']
      }
    }
  },
  plugins: []
}
