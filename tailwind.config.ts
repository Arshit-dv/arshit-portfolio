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
        paper: '#F5F0E8',
        'paper-light': '#FAF7F2',
        'paper-dark': '#EDE6D6',
        'paper-darker': '#D9D0BE',
        ink: '#1A1A1A',
        'ink-light': '#3D3D3D',
        'ink-muted': '#6B6B6B',
        'ink-faint': '#9A9A9A',
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
