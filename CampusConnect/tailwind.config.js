/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Nunito', 'sans-serif'],
      },
      colors: {
        glass: 'rgba(255,255,255,0.15)',
        glassDark: 'rgba(20,20,30,0.4)',
        primary: '#6C47FF',
        secondary: '#00E6D8',
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        neumorph: "8px 8px 24px #c6c6c6, -8px -8px 24px #ffffff"
      },
      backgroundImage: {
        'gradient-wave': 'linear-gradient(135deg, #6C47FF 0%, #00E6D8 100%)'
      },
      animation: {
        'slow-bounce': 'bounce 2s infinite'
      }
    }
  },
  plugins: []
};