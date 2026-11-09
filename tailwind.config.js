/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0B0F14',
          900: '#11161E',
          850: '#161D27',
          800: '#1D2532',
          750: '#252F3F',
          700: '#2E3A4D',
          600: '#435269',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
        },
        copper: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#D97736', // Primary Burnished Copper
          600: '#C25E1F',
          700: '#9A4514',
          800: '#7C3410',
          light: '#E88C48',
          glow: 'rgba(217, 119, 54, 0.25)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.25)',
        'medium': '0 12px 32px -4px rgba(0, 0, 0, 0.4)',
        'elevated': '0 24px 48px -8px rgba(0, 0, 0, 0.55)',
        'copper-glow': '0 0 25px rgba(217, 119, 54, 0.35)',
      }
    },
  },
  plugins: [],
}
