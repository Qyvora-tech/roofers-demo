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
          950: '#0B0E0F', // Obsidian Black
          900: '#121617', // Deep Slate Obsidian
          850: '#181D1F', // Elevated Dark Surface
          800: '#202628', // Primary Charcoal
          700: '#2D3538',
          600: '#3E494D',
          500: '#535E61',
        },
        copper: {
          50: '#FBF5F1',
          100: '#F4E8DF',
          200: '#E5C5B0',
          300: '#D5A282',
          400: '#C88256', // Radiant Copper
          500: '#B86B3D', // Oxidized Copper
          600: '#9E552D',
          700: '#7F401E',
          glow: '#D97736',
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
        'copper-glow': '0 0 35px -5px rgba(184, 107, 61, 0.45)',
        'obsidian-lg': '0 25px 60px -15px rgba(0, 0, 0, 0.85)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%, 100%': { top: '0%' },
          '50%': { top: '100%' },
        }
      }
    },
  },
  plugins: [],
}
