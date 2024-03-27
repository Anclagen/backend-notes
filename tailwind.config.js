/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        berkeley_blue: {
          DEFAULT: "#133157",
          100: "#040a12",
          200: "#081423",
          300: "#0c1d35",
          400: "#0f2746",
          500: "#133157",
          600: "#22569a",
          700: "#397cd3",
          800: "#7ba8e2",
          900: "#bdd3f0",
        },
        moonstone: {
          DEFAULT: "#46b1c9",
          100: "#0c242a",
          200: "#184954",
          300: "#246d7e",
          400: "#3192a8",
          500: "#46b1c9",
          600: "#6ac1d4",
          700: "#90d0df",
          800: "#b5e0e9",
          900: "#daeff4",
        },
        seasalt: {
          DEFAULT: "#faf9f9",
          100: "#362d2d",
          200: "#6d5b5b",
          300: "#9f8c8c",
          400: "#cdc3c3",
          500: "#faf9f9",
          600: "#fbfbfb",
          700: "#fcfcfc",
          800: "#fdfdfd",
          900: "#fefefe",
        },
        selective_yellow: {
          DEFAULT: "#fcb51f",
          100: "#372601",
          200: "#6f4c02",
          300: "#a67203",
          400: "#dd9803",
          500: "#fcb51f",
          600: "#fcc44a",
          700: "#fdd377",
          800: "#fee1a5",
          900: "#fef0d2",
        },
        peach: {
          DEFAULT: "#fee5af",
          100: "#553a01",
          200: "#aa7402",
          300: "#fcae05",
          400: "#fdc959",
          500: "#fee5af",
          600: "#feeabe",
          700: "#ffefcf",
          800: "#fff5df",
          900: "#fffaef",
        },
      },
    },
  },
  plugins: [],
};
