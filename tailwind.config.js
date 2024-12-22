/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "linkedin-blue": "#0072B1",
        "github-grey": "#333333",
        "youtube-red": "#FF0000",
        primary: "#FFFAF4",
        "primary-dark": "#FFE3c1",
      },
    },
  },
  plugins: [],
};
