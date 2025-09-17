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
        'deep-purple': '#4C1D95',
        'lavender': '#8B5CF6',
        'teal': '#14B8A6',
        'mint-green': '#10B981',
        'charcoal': '#374151',
        'soft-pink': '#F8BBD9',
        'cream': '#FEF7CD',
        'hot-pink': '#EC4899',
        'dark-grey': '#1F2937',
        'light-grey': '#F3F4F6',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #4C1D95 0%, #8B5CF6 50%, #1F2937 100%)',
        'gradient-yellow-pink': 'linear-gradient(45deg, #FFD700, #FF69B4)',
        'gradient-purple-teal': 'linear-gradient(45deg, #8B5CF6, #14B8A6)',
        'gradient-cream': 'linear-gradient(135deg, #FEF7CD 0%, #F8BBD9 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1F2937 0%, #4C1D95 100%)',
      },
      boxShadow: {
        'glow-yellow': '0 0 20px rgba(255, 215, 0, 0.5)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.5)',
        'shadow-pink': '0 8px 32px rgba(248, 187, 217, 0.4)',
        'shadow-cream': '0 10px 30px rgba(254, 247, 205, 0.3)',
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