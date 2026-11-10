import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#322918',
        'paper-light': '#2D2111',
        'paper-dark': '#2C2513',
        'paper-darker': '#221B0B',
        ink: '#D8D5D0',
        'ink-light': '#C5BEB0',
        'ink-muted': '#A09787',
        'ink-faint': '#7A7263',
        obsidian: '#151517',
        stone: '#837A69',
        cream: '#F5F0E8',
        vermilion: '#E63B2E',
        'vermilion-dark': '#C42F24',
        'vermilion-light': '#FF5A4F',
      },
      fontFamily: {
        novel: ['"EB Garamond"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        body: ['"EB Garamond"', '"Source Serif 4"', 'Georgia', 'serif'],
        chapter: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'draw-line': 'drawLine 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
