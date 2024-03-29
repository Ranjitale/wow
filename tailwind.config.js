/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#111D33',
        buttonColor: "#38BDF8",
        bgColor: "rgb(19,25,57)",
        wow:"#1D1A27"
      },
      fontFamily: {
        myFont: ['Poppins', 'sans-serif'],
        meroFont:['Fredoka', "sans-serif"],
        mulish:['Mulish',"sans-serif"]
        // Add more font families as needed
      },
    },
  },
  plugins: [],
}