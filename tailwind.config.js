/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        gamer: ['"Silkscreen"', 'monospace'],
      },
      colors: {
        dark: {
          950: '#030712',
          900: '#080e1e',
          850: '#0c1527',
          800: '#111d35',
        }
      },
      animation: {
        'pulse-slow': 'pulse-slow 8s infinite ease-in-out',
        'glow-pulse': 'glow-pulse 3s infinite ease-in-out',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.1)', opacity: '0.35' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
