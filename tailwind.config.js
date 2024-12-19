/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-1fr": "repeat(auto-fill, minmax(100px, 1fr))",
      },
    },
  },
  plugins: [],
};
