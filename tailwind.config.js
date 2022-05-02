module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkblue: "hsl(209, 23%, 22%)",
        darkBg: "hsl(207, 26%, 17%)",
        lightBg: "hsl(0, 0%, 98%)",
        lightText: "hsl(200, 15%, 8%)",
        lightInput: "hsl(0, 0%, 52%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
