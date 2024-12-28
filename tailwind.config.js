/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        highlight: "var(--highlight)",
        transback: "var(--transback)",
      },
    },
  },
  plugins: [],
};
