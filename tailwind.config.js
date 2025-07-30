/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-blue': '#2563eb',
        'accent-green': '#10b981',
        'accent-purple': '#7c3aed',
        'accent-orange': '#f59e0b',
        'dark-gray': '#1f2937',
        'light-gray': '#f8fafc',
      },
      fontFamily: {
        'display': ['Sora', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'typing': 'typing 3s steps(30, end), blink-caret 0.8s step-end infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#2563eb' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)'
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.05)',
            boxShadow: '0 0 0 10px rgba(16, 185, 129, 0)'
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      aspectRatio: {
        'video': '16 / 9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}