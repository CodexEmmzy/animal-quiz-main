/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Spectral SC"', 'serif'],
        'body': ['"IBM Plex Sans"', 'sans-serif']
      },
      colors: {
        'background': {
          DEFAULT: '#121218',
          light: '#1a1a24'
        },
        'steel': {
          light: '#a3c1e0',
          DEFAULT: '#5a8bba',
          dark: '#2c4a6b'
        },
        'text': {
          light: '#f5f5f7',
          DEFAULT: '#e0e0e5',
          dark: '#a0a0a8'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};