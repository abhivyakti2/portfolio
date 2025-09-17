/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'citrus-yellow': '#FFE066',
        'tangerine': '#FF6B35',
        'strawberry-pink': '#FF5D8F',
        'indigo-black': '#2E1A47',
        'bright-yellow': '#FFE066', // Keep for compatibility
        'deep-purple': '#2E1A47',
        'lavender': '#FF5D8F',
        'teal': '#FF6B35',
        'mint-green': '#FFE066',
        'charcoal': '#374151',
        'soft-pink': '#FF5D8F',
        'cream': '#FFE066',
        'hot-pink': '#FF5D8F',
        'dark-grey': '#2E1A47',
        'light-grey': '#F3F4F6',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #2E1A47 0%, #FF5D8F 50%, #FF6B35 100%)',
        'gradient-yellow-pink': 'linear-gradient(45deg, #FFE066, #FF5D8F)',
        'gradient-purple-teal': 'linear-gradient(45deg, #FF5D8F, #FF6B35)',
        'gradient-pink-lavender': 'linear-gradient(45deg, #FF5D8F, #FFE066)',
        'gradient-cream': 'linear-gradient(135deg, #FFE066 0%, #FF5D8F 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2E1A47 0%, #FF6B35 100%)',
      },
      boxShadow: {
        'glow-yellow': '0 0 20px rgba(255, 224, 102, 0.5)',
        'glow-purple': '0 0 20px rgba(255, 93, 143, 0.5)',
        'glow-pink': '0 0 20px rgba(255, 93, 143, 0.5)',
        'glow-teal': '0 0 20px rgba(255, 107, 53, 0.5)',
        'shadow-pink': '0 8px 32px rgba(255, 93, 143, 0.4)',
        'shadow-cream': '0 10px 30px rgba(255, 224, 102, 0.3)',
        'shadow-float': '0 20px 40px rgba(46, 26, 71, 0.3)',
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