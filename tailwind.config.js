module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6'
        },
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#996DFF",
          // "primary-content": "#8257e6",
          "primary-focus": "#8257e6",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          // "base-100": "#ffffff",
          "base-content": "#000",
        },
      }
    ],
  },
}
