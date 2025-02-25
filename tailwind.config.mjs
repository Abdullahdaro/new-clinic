/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maincolor: "#F6F5F3",
        secondary: "#00f6ff",
        main: "rgba(216, 167, 104, 0.91)",
        bg: "#faf3e8",
        bg1:'rgba(60, 60, 59, 0.02)',
        bgno: 'rgba(221, 172, 104, 0.10)'
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
      },
      screens: {
        xs: "350px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  plugins: [],
};
