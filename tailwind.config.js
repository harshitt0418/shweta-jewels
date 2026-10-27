/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF8F5',
          200: '#F5F1EB',
          300: '#EFEAE2',
          400: '#E5DED3',
          500: '#D5CAC0'
        },
        espresso: {
          DEFAULT: '#1E1A17',
          light: '#2E2722',
          card: '#FAF7F2',
          muted: '#6E645A',
          subtle: '#9A8E83'
        },
        gold: {
          light: '#DECBB0',
          DEFAULT: '#C4A67B',
          dark: '#A9895C',
          subtle: 'rgba(196, 166, 123, 0.25)'
        },
        brandIndigo: {
          DEFAULT: '#4D36A8',
          subtle: 'rgba(77, 54, 168, 0.08)',
          glow: 'rgba(77, 54, 168, 0.18)'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Didot', 'Bodoni MT', 'serif'],
        editorial: ['"Italiana"', 'Didot', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        widest_editorial: '0.22em',
        luxury: '0.18em',
        subtle: '0.06em'
      }
    },
  },
  plugins: [],
}
