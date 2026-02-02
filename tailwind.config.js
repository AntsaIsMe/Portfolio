/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Scanne uniquement ton code dans le dossier src
  ],
  theme: {
    extend: {
      colors: {
        darker: "#181817",
        dark: "#0a1543",
        normal: "#19327f",
        light: "#021fa0",
        lighter: "#1b45d7",
      }
    },
  },
  plugins: [],
}

