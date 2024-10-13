/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['ClashGrotesk', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      scaleIn: {
        '0%': { transform: 'scale(0.95)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
      scale: {
        '3d': 'scale3d(1, 1, 1)',
        '3d-sm': 'scale3d(0.95, 0.95, 0.95)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        scaleIn: 'scaleIn 1.5s ease-in-out forwards'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
