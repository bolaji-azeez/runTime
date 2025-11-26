// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        "dropdown-open": "dropdownOpen 0.4s ease-out forwards",
        "dropdown-close": "dropdownClose 0.3s ease-in forwards",
      },
      keyframes: {
        dropdownOpen: {
          "0%": {
            maxHeight: "0",
            opacity: "0",
            transform: "scaleY(0.8) translateY(-10px)",
          },
          "50%": {
            opacity: "0.7",
            transform: "scaleY(0.95) translateY(-5px)",
          },
          "100%": {
            maxHeight: "60vh",
            opacity: "1",
            transform: "scaleY(1) translateY(0)",
          },
        },
        dropdownClose: {
          "0%": {
            maxHeight: "60vh",
            opacity: "1",
            transform: "scaleY(1) translateY(0)",
          },
          "50%": {
            opacity: "0.7",
            transform: "scaleY(0.95) translateY(-5px)",
          },
          "100%": {
            maxHeight: "0",
            opacity: "0",
            transform: "scaleY(0.8) translateY(-10px)",
          },
        },
      },
    },
  },
};
