/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        primaryStrongCyan: "hsl(171, 66%, 44%)",
        primaryLightBlue: "hsl(233, 100%, 69%)",
        neutralDarkGrayishBlue: "hsl(210, 10%, 33%)",
        neutralGrayishBlue: "hsl(201, 11%, 66%)",
      },
      fontSize: {
        bodyCopy: "18px",
      },
      fontFamily: {
        Bai_Jamjuree: ["Bai Jamjuree", "Arial", "Sans-Serif"],
      },
      fontWeight: {
        BaiJamjuree400: "400",
        BaiJamjuree600: "600",
      },
      backgroundImage: {
        header_Desktop: "url('/src/images/bg-header-desktop.png')",
        header_Mobile: "url('/src/images/bg-header-desktop.png')",
      },
    },
  },
  plugins: [],
}
