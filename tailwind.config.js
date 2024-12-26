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
      // used to show image sliding animation in Projects component
      keyframes: {
        "slide-out-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "slide-out-right": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        "slide-in-left": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-out-left": "slide-out-left 0.5s ease-in-out",
        "slide-out-right": "slide-out-right 0.5s ease-in-out",
        "slide-in-left": "slide-in-left 0.5s ease-in-out",
        "slide-in-right": "slide-in-right 0.5s ease-in-out",
      },
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
