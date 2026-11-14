/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        limestone: {
          50: '#F5F3ED',
          100: '#EFECE4',
          200: '#EAE7DF', // Primary Editorial Surface
          300: '#DED9CE',
          400: '#CFC8BA',
          500: '#BFB6A4',
        },
        carbon: {
          950: '#141718',
          900: '#1C2122',
          800: '#252B2C', // Primary Deep Charcoal/Black
          700: '#32393B',
          600: '#414A4C',
          500: '#535E61',
        },
        copper: {
          100: '#F2E5DC',
          200: '#DEBAA3',
          300: '#C69376',
          400: '#B57E5D',
          500: '#A66E4E', // Oxidized Copper (Accent)
          600: '#8C5A3E',
          700: '#724730',
        },
        stone: {
          100: '#ECEBE7',
          200: '#D8D6CE',
          300: '#C2C0B5',
          400: '#AAA99C', // Weathered Stone (Architectural Metadata)
          500: '#8E8D7F',
          600: '#737264',
        },
        chalk: {
          DEFAULT: '#F8F7F3', // Chalk (High-contrast pure surface)
          100: '#FFFFFF',
          200: '#F8F7F3',
          300: '#F0EFE9',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        'site': '1380px',
      },
      boxShadow: {
        'editorial': '0 30px 60px -20px rgba(37, 43, 44, 0.08), 0 0 1px 1px rgba(37, 43, 44, 0.04)',
        'fine': '0 10px 30px -10px rgba(37, 43, 44, 0.06)',
      }
    },
  },
  plugins: [],
}
