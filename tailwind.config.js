import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideAndScale: {
          "0%": { transform: "translateX(0) scaleX(1)", opacity: "1" },
          "50%": { transform: "translateX(50px) scaleX(0.8)", opacity: "0.7" },
          "100%": { transform: "translateX(0) scaleX(1)", opacity: "1" },
        },
      },
      animation: {
        "slide-scale": "slideAndScale 3s ease-in-out infinite",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
