/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      color: "var(--color)",
      background: "var(--background)",
    },
  },
  plugins: [],
};
