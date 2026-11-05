import defaultTheme from 'tailwindcss/defaultTheme';

/**
 * Tailwind CSS configuration for Ateliê da Vó Bela
 * Warm, earthy, artisanal palette: Terracotta, Linen Cream, Sage Green, and Sand.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9c6644', // Warm terracotta
          light: '#b07d62',
          dark: '#7f4f24',
          hover: '#8b5a3c',
        },
        secondary: {
          DEFAULT: '#fbf7f4', // Warm linen / off-white
          dark: '#f0e6dd',
          card: '#ffffff',
        },
        accent: {
          DEFAULT: '#829572', // Calming sage green
          light: '#a3b18a',
          dark: '#588157',
        },
        sand: {
          DEFAULT: '#faedcd',
          dark: '#d4a373',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(156, 102, 68, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        hover: '0 10px 25px -3px rgba(156, 102, 68, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
