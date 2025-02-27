/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add any custom colors here
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  darkMode: 'class',
}
