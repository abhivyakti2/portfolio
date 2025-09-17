/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'bright-yellow': '#FFD700',
        'soft-pink': '#FFB6C1',
        'pastel-lavender': '#DDA0DD',
        'creamy-white': '#FFF8DC',
        'hot-pink': '#FF69B4',
        'light-pink': '#FFC0CB',
        'pale-yellow': '#FFFFE0',
      },
      backgroundImage: {
        'gradient-girlish': 'linear-gradient(135deg, #FFD700 0%, #FFB6C1 50%, #DDA0DD 100%)',
        'gradient-yellow-pink': 'linear-gradient(45deg, #FFD700, #FF69B4)',
        'gradient-pink-lavender': 'linear-gradient(45deg, #FFB6C1, #DDA0DD)',
        'gradient-soft': 'linear-gradient(135deg, #FFFFE0 0%, #FFB6C1 100%)',
      },
      boxShadow: {
        'glow-yellow': '0 0 20px rgba(255, 215, 0, 0.5)',
        'glow-pink': '0 0 20px rgba(255, 105, 180, 0.5)',
        'glow-soft': '0 8px 32px rgba(255, 182, 193, 0.3)',
        'float': '0 10px 30px rgba(255, 182, 193, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'bounce-in': 'bounce-in 0.8s ease-out',
        'tilt': 'tilt 0.5s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};