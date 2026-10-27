/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0A0A0C',
          light: '#131317',
          card: '#16161B',
          surface: '#1A1A22',
          border: 'rgba(244, 240, 232, 0.12)'
        },
        champagne: {
          DEFAULT: '#F4F0E8',
          light: '#FAF8F5',
          dark: '#E2DAC8',
          muted: '#C4BCAB'
        },
        platinum: {
          DEFAULT: '#B8BAC2',
          light: '#E2E3E8',
          dark: '#7A7E8B'
        },
        indigoBrand: {
          light: '#7256D4',
          DEFAULT: '#4D36A8',
          dark: '#2E1E6B',
          glow: 'rgba(77, 54, 168, 0.35)'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Didot', 'Bodoni MT', 'Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        editorial: ['"Italiana"', 'Didot', 'serif']
      },
      letterSpacing: {
        widest_editorial: '0.22em',
        ultra: '0.3em'
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 5s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
