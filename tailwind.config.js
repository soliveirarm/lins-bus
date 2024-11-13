/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#73c78a",
        "accent-darker": "#50b96d",
        dark: "#2a2a2a",
      },
    },
  },
  plugins: [],
}
