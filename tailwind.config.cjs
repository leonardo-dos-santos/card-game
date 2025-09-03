module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { 
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        scoreGreen: '#10b981',
        bestYellow: '#f59e0b',
        buttonHover: 'rgba(255, 255, 255, 0.1)',
        cardBack: '#334155',
        cardSelected: '#f59e0b',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'flip': 'flip 0.6s ease-in-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        flip: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
        },
      },
    } 
  },
  plugins: [],
}
