const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        "Nunito-Regular": ['"Nunito-Regular"', "sans-serif"],
        "Nunito-SemiBold": ['"Nunito-SemiBold"', "sans-serif"],
        "Nunito-Bold": ['"Nunito-Bold"', "sans-serif"],
        "Graphik-Bold": ['"Graphik-Bold"', "sans-serif"],
      },
      fontSize: {
        xs: ["16px", "38px"],
        sm: ["18px", "25px"],
        "base-sm": ["20px", "28px"],
        "base-xl": ["21px", "39px"],
        lg: ["28px", "38px"],
        xl: ["58px", "80px"],
        "2xl": ["60px", "70px"],
      },
      maxWidth: {
        ...defaultTheme.maxWidth,
        desktop: "1200px",
      },
      screens: {
        sm: { max: "601px" },
        md: { max: "851px" },
        lg: { max: "1251px" },
      },
      colors: {
        purple: "var(--purple)",
        black: "var(--black)",
        blacky: "var(--blacky)",
        white: "var(--white)",
        grey: "var(--grey)",
      },
      zIndex: {
        fixed: "20",
        content: "10",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        svg: {
          fill: "currentColor",
        },
        body: {
          fontFamily: "Nunito-Regular",
          outline: "none",
        },
        h1: {
          fontSize: "80px",
          lineHeight: "84px",
          fontFamily: "Graphik-Bold",
        },
        h2: {
          fontSize: "60px",
          lineHeight: "70px",
          fontFamily: "Graphik-Bold",
        },
        h3: {
          fontSize: "28px",
          lineHeight: "38px",
          fontFamily: "Nunito-SemiBold",
        },
      });
      addUtilities({
        ".flex": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".flex-start": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        },
        ".flex-left": {
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        },
        ".flex-right": {
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        },
        ".flex-end": {
          display: "flex",
          alignItems: "flex-end",
        },
        ".text-SemiBold": {
          fontFamily: "Nunito-SemiBold",
        },
        ".text-bold": {
          fontFamily: "Nunito-Bold",
        },
        ".h-max": {
          height: "max-content",
        },
        ".abs": {
          width: "max-content",
          height: "max-content",
          position: "absolute",
          margin: "auto",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      });
    }),
  ],
};
