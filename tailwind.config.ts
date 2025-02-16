import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        custom: {
          DEFAULT: '#3B82F6',
        },
      },
    },
  },
  plugins: [],
}

export default config
