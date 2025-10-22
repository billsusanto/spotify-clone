/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1DB954',
          light: '#1ED760',
          dark: '#169C46',
        },
        secondary: {
          DEFAULT: '#535353',
          light: '#727272',
          dark: '#3E3E3E',
        },
        background: {
          primary: '#121212',
          secondary: '#181818',
          tertiary: '#282828',
          elevated: '#2A2A2A',
          sidebar: '#000000',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
          muted: '#6A6A6A',
          disabled: '#535353',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      zIndex: {
        '90': '90',
        '100': '100',
        '110': '110',
      },
    },
  },
  plugins: [],
}
