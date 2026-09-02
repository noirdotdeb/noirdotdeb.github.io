/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0c',
          surface: '#111114',
          elevated: '#16161a',
        },
        border: {
          DEFAULT: '#1e1e22',
          subtle: '#17171a',
          hover: '#2a2a30',
        },
        content: {
          primary: '#e6e6ea',
          muted: '#8b8b94',
          faint: '#5a5a63',
        },
        accent: {
          DEFAULT: '#5b9ead',
          hover: '#73b3c2',
          muted: '#3d6f7d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1100px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
