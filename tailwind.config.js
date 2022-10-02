/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9CCC65",
          secondary: "#FF5722",
          accent: "#25316D",
          neutral: "#272532",
          "black-10": "#100F0F",
          info: "#B71C1C",
          success: "#EEEEEE",
          warning: "#A96704",
          error: "#DC4D38",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
