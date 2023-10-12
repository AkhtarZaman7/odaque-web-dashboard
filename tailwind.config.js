/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      xxs: "0.5rem",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
      sans: ["Open Sans", "sans"],
      sora: ["Sora", "sans"],
      inter: ["Inter", "sans"],
      monaSans: ["Mona Sans", "sans"],
      sans: ["Open Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    fontWeight: {
      bolder: "1000",
      semibold: "600",
      bold: "700",
      medium: "500",
      light: "300",
      regular:"400"
    },
    extend: {
      width: {
        custom: "400px", // You can adjust the width value as needed
      },
      colors: {
        // black: {
        //   primary: '#161e2a',
        // },
        gray: {
          50: "#f3f8fe",
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        blue: {
          100: "#ebf8ff",
          200: "#bee3f8",
          300: "#90cdf4",
          400: "#63b3ed",
          500: "#4299e1",
          600: "#3182ce",
          700: "#2b6cb0",
          800: "#2c5282",
          900: "#2a4365",
        },
        unselected: "#a9b2cf",
        blueSelected: "#0A6EF0",
        globalBackground: "#CAD2E6",
        bgSignUp: "#f5f5f6",
        lightmode: "#53659E",
        lightgray: "#f4f7fe",
        border: "#e3eaf7",
        graytext: "#64748b",
        lightgraytext: "#adb8d1",
        descriptiontext: "#5b5f77",
        bgcolor: "#f7f7f8",
        statusColor: "#5298f5",
        statusBg: "#f2f5ff",
        disabled: "#C0C0C5",
        border2: "#e6e6e8",
        hover: "#eaf6ff",
        borderb: "#0D7CFF",
        star: "#FF8C00",
        blackSecondary: "#353745",
        editText: "#efa037",
        editBg: "#fff4e8",
        trainerbg: "#FFF5EB",
        primaryBg: "#eaf6ff",
        error:  "#FF453A",
        lockbg:  "#fff2f1",
        checkbg:  "#27AE60",
        playtype: "#F29213",,
        primarygraybg: "#f6f6f6",
        active: "#27B737",
        activebgteams: "#f4fdf5",
        inactivebg: "#fff1f1",
        secondary: "#020517",
        activebg2: "#EEFFE8",playtypebg: "#FFF5EB",
      },
    },
  },
  plugins: [],
};
