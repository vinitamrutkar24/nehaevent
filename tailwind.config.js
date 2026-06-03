/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#E6D5B8',
          DEFAULT: '#D4AF37',
          dark: '#AA7C11',
          champagne: '#F0E6D2',
        },
        luxury: {
          black: '#080808',
          charcoal: '#121212',
          panel: '#1A1A1A',
          cream: '#FCF8F2',
          goldGlow: 'rgba(212, 175, 55, 0.15)',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FAF5EF 0%, #FAF5EF 10%, #D4AF37 50%, #AA7C11 100%)',
        'gold-text': 'linear-gradient(135deg, #F0E6D2 0%, #D4AF37 50%, #AA7C11 100%)',
        'dark-gradient': 'linear-gradient(180deg, #121212 0%, #080808 100%)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
