const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // permite alternar tema claro/escuro manualmente (via className="dark")
  theme: {
    extend: {
      colors: {
        github: {
          background: '#0d1117',
          surface: '#161b22',
          border: '#30363d',
          accent: '#58a6ff',
          text: '#c9d1d9',
          secondary: '#8b949e',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        card: '0 4px 8px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // opcional: boas práticas de textos longos
    require('@tailwindcss/line-clamp'),
  ],
};
