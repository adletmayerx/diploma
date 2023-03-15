/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shamrock: "#3DDC84",
        tiber: "#073042",
        "mine-shaft": "#202020",
      },
    },
  },
  plugins: [],
};

module.exports = config;
