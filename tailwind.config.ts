import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00bcd4',
          dark: '#0097a7'
        },
        secondary: {
          DEFAULT: '#ffb300',
          dark: '#ffa000'
        },
        background: '#031b34',
        card: '#0a2e49'
      }
    }
  },
  plugins: []
};

export default config;
