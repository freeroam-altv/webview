const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    safelist: [/data-theme$/],
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      red: colors.red,
      dark: "var(--cl-dark)",
    },
    extend: {
      fontSize: {
        xxs: "10px",
        xxsm: "9px",
        xxxs: "8px",
      },
      gridTemplateColumns: {
        auth: "1fr 540px",
        main: "270px 1fr",
        "card-selector": "1fr 150px",
      },
      gridTemplateRows: {
        main: "72px 1fr",
      },
      boxShadow: {
        block: "0px 4px 40px 0px rgba(0, 0, 0, 0.05)",
        blockHover: "0px 4px 40px 0px rgba(41, 146, 250, 0.15)",
        top: "0px 1px 40px 0px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        blob: "blob 6s infinite",
        spinLogo: "spinLogo 1.2s linear infinite"
      },
      zIndex: {
        55: 55,
        65: 65,
        75: 75,
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        spinLogo: {
          "0%": {
            transform: "rotate(0deg) scale(1)"
          },
          "25%": {
            transform: "rotate(90deg) scale(1.2)"
          },
          "50%": {
            transform: "rotate(180deg) scale(1.4)"
          },
          "75%": {
            transform: "rotate(270deg) scale(1.2)"
          },
          "100%": {
            transform: "rotate(360deg)  scale(1)"
          }
        }
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, e, theme }) {
      const colors = theme("colors");
      const strokeColors = Object.keys(colors).reduce((acc, key) => {
        if (typeof colors[key] === "string") {
          return {
            ...acc,
            [`.stroke-${e(key)}`]: {
              stroke: colors[key],
            },
          };
        }

        const variants = Object.keys(colors[key]);

        const getVariant = (variant) => {
          return variant === "DEFAULT" ? "" : `-${variant}`;
        };

        return {
          ...acc,
          ...variants.reduce(
              (a, variant) => ({
                ...a,
                [`.stroke-${e(key)}${getVariant(variant)}`]: {
                  stroke: colors[key][variant],
                },
              }),
              {}
          ),
        };
      }, {});
      addUtilities(strokeColors);
    }),
    require("tailwindcss-labeled-groups")(["sub", "btn"]),
    require("daisyui"),
  ],
}
