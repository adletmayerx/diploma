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
        "charleston-green": "#272727",
        "suva-grey": "#8B8B8B",
        charcoal: "#424242",
        "royal-blue": "#4285F4",
        "dark-charcoal": "#2F2F2F",
        "raisin-black": "#222222",
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
