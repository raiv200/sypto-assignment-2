/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        typing: "typing 3.5s steps(40, end), blinkCaret .75s step-end infinite",
        slideInFromRight: "slideInRight 1s ease-in-out forwards",
        slideInFromLeft:"slideInLeft 1s ease-in-out forwards"
      },
      keyframes: {
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        blinkCaret: {
          from: { borderColor: "transparent" },
          to: { borderColor: "transparent" },
          "50%": { borderColor: "transparent" },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(30%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        slideInLeft: {
          "0%": {
            transform: "translateX(-30%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },

        text: {
          "0%, 100%": {
            "background-position": "left center",
          },
          "50%": {
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [], // Enable the transform plugin
};
