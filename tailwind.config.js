module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#8257e6',
          500: '#173f5f'
        },
      }
      ,
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        mont: ['Montserrat']
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
          primary: "#206398",
          // "primary-content": "#8257e6",
          // "primary-focus": "#8257e6",
          secondary: "#f6d55c",
          accent: "#37cdbe",
          neutral: "#3d4451",
          // "base-100": "#ffffff",
          "base-content": "#000",
        },
      }
    ],
  },
}
