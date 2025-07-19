import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Đặt mặc định font sans là Poppins
      },
    },
  },
  plugins: [daisyui, require('tailwind-scrollbar')], 
  
  daisyui: {
    themes: ["light", "dark"],
  },
};
