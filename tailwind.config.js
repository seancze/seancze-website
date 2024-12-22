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
      fontFamily: {
        halloween: ["Halloween", "sans-serif"],
      },
      cursor: {
        "magic-wand": 'url("/images/cursor_wand.png"), auto',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "linkedin-blue": "#0072B1",
        "github-grey": "#333333",
        "youtube-red": "#FF0000",
        primary: "#FFFAF4",
        "primary-dark": "#303030",
        secondary: "#FFE3c1",
        "artyclick-amber": "#FBC200",
        "dark-pastel-purple": "#9a6DD7",
        "alice-blue": "#EFF7FF",
        parchment: "#FCF5e5",
      },
      translate: {
        97: "25rem",
      },
    },
  },
  plugins: [],
};
