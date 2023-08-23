/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      inset: {
        17: "68px",
        26: "104px",
      },
      colors: {
        primary: {
          DEFAULT: "#3a34eb",
          black: "#222831",
          gray: "#393e46",
          white: "#EEEEEE",
        },
      },
    },
  },
  plugins: [],
};
