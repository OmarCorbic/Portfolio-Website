/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fly: "fly 20s linear infinite",
      },
      keyframes: {
        fly: {
          "0%": {
            transform: "translateX(0px) translateY(0px) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(2000px) translateY(-300px) rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
