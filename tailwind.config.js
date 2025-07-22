/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "slide-in-up": "slideInUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "rotate-in": "rotateIn 0.8s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}