/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shamrock: "#3DDC84",
        tiber: "#073042",
        "mine-shaft": "#202020",
        "night-rider": "#303030",
        nobel: "#A0A0A0",
        nero: "#202020",
        "charleston-green": "#272727",
      },
      width: {
        "210px": "210px",
        "310px": "310px",
      },
      height: {
        "206px": "206px",
        "304px": "304px",
      },
    },
  },
  plugins: [],
};

module.exports = config;
