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
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "underline-grow": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px var(--magic-gold)" },
          "50%": {
            boxShadow:
              "0 0 20px var(--magic-gold), 0 0 30px var(--magic-amber)",
          },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        "ink-spread": {
          from: { clipPath: "circle(0% at 50% 50%)" },
          to: { clipPath: "circle(150% at 50% 50%)" },
        },
        "lumos-flash": {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "scroll-indicator": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.5" },
        },
      },
      animation: {
        "slide-out-left": "slide-out-left 0.5s ease-in-out",
        "slide-out-right": "slide-out-right 0.5s ease-in-out",
        "slide-in-left": "slide-in-left 0.5s ease-in-out",
        "slide-in-right": "slide-in-right 0.5s ease-in-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in-up-delay-1": "fade-in-up 0.6s ease-out 0.1s forwards",
        "fade-in-up-delay-2": "fade-in-up 0.6s ease-out 0.2s forwards",
        "fade-in-up-delay-3": "fade-in-up 0.6s ease-out 0.3s forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        flicker: "flicker 2s ease-in-out infinite",
        sparkle: "sparkle 1.5s ease-in-out infinite",
        twinkle: "twinkle 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "ken-burns": "ken-burns 10s ease-out forwards",
        "ink-spread": "ink-spread 1.5s ease-out forwards",
        "lumos-flash": "lumos-flash 0.5s ease-out forwards",
        "scroll-indicator": "scroll-indicator 2s ease-in-out infinite",
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
        secondary: "#FFFFFF",
        accent: "#3B82F6",
        "accent-hover": "#2563EB",
        "text-primary": "#1A1A1A",
        "text-secondary": "#666666",
        "border-light": "#E5E5E5",
        "border-medium": "#D1D5DB",
        "artyclick-amber": "#FBC200",
        "dark-pastel-purple": "#9a6DD7",
        "alice-blue": "#EFF7FF",
        // Magic mode - Harry Potter palette
        "magic-bg-primary": "#1A0F0A",
        "magic-bg-secondary": "#2D1810",
        parchment: "#F4E4BC",
        "magic-gold": "#D4AF37",
        "magic-amber": "#FFB347",
        "magic-purple": "#6B4984",
        "magic-candle": "#FF9500",
        "magic-gold-muted": "#C9A959",
      },
      translate: {
        97: "25rem",
      },
      boxShadow: {
        "card-sm": "0 1px 3px rgba(0, 0, 0, 0.08)",
        "card-md":
          "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",
        "card-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)",
        "magic-glow": "0 0 20px rgba(212, 175, 55, 0.4)",
        "magic-card":
          "2px 3px 10px rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(138, 77, 15, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
