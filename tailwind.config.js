/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#141118',
        'dark-border': '#302839',
        'dark-table-bg': '#211c27',
        'dark-table-border': '#473b54',
        'text-secondary': '#ab9db9',
        'primary-purple': '#9234ef',
      },
    },
  },
  plugins: [],
}