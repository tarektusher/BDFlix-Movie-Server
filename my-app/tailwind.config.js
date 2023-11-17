/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "dark" : "#000614",
        "dark2" : "#C00000",
        "text" : "white",
        "primary" : "#E50914",
        "secondary" : "red",
        "form_color_hover" :"#4E4E4E",
        "form_color" :"#004d40",
        "footer" :"#B3ADA8",
        "gray" :"#757575",
        "newcl" : "#2E3B55"
      },
    },
  },
  plugins: [],
}