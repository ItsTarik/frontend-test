const { fontFamily, colors } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        microContrast: "#F4F4F4",
        lowContrast: "#CECECE",
        highContrast: "#212121",
        red: {
          ...colors.red,
          primary: "#B00005",
        },
      },
      minHeight: {},
      fontFamily: {
        sans: ["Source Sans Pro", ...fontFamily.sans],
        merriweather: "Merriweather",
      },
    },
  },
};
