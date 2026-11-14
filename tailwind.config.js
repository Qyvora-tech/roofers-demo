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
          950: '#0F161A',
          900: '#172328', // Midnight Slate (Primary Brand Dark)
          850: '#1F2C32',
          800: '#27363D',
          700: '#34454E',
        },
        copper: {
          50: '#FAF4EF',
          100: '#F4E7DD',
          200: '#E7CEBC',
          300: '#DAB59A',
          400: '#CE9C78',
          500: '#C29369', // Aged Copper (Primary Accent)
          600: '#A87A52',
          700: '#8C623E',
          800: '#714B2D',
          900: '#56351E',
        },
        ivory: {
          50: '#FCFAF7',
          100: '#F9F6F0',
          200: '#F4F0E8', // Warm Ivory (Primary Main Background)
          300: '#EAE3D5',
          400: '#DDD3C0',
        },
        sage: {
          100: '#E7ECEB',
          200: '#CFDAD7',
          300: '#B0C2BD',
          400: '#8B9995', // Muted Sage (Architectural Secondary)
          500: '#707E7A',
          600: '#56635F',
        },
        graphite: {
          100: '#A2AFB4',
          200: '#7B8B91',
          300: '#546369',
          400: '#343F43', // Deep Graphite
          500: '#232B2E',
          600: '#161B1D',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Manrope"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'elevated': '0 20px 40px -15px rgba(23, 35, 40, 0.08), 0 0 1px 1px rgba(23, 35, 40, 0.04)',
        'premium': '0 25px 50px -12px rgba(23, 35, 40, 0.15)',
        'copper-glow': '0 0 25px rgba(194, 147, 105, 0.25)',
      },
      maxWidth: {
        'site': '1320px',
      }
    },
  },
  plugins: [],
}
