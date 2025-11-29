/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          50: "#FBF7F6" // fond crème de la maquette
        },
        brand: {
          500: "#58C6FF",
          600: "#2FA9FF",
          700: "#1E8CF3",
          800: "#136FD1"
        }
      },
      boxShadow: {
        // Glow doux utilisé dans la nav et les cartes
        soft: "0 12px 36px rgba(13, 74, 174, 0.15)",
        glass: "0 10px 28px rgba(46, 139, 240, 0.25)",
        insetSoft: "inset 0 1px 0 rgba(255,255,255,0.65), inset 0 -10px 20px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl2: "20px", // coins larges comme les cartes
        xl3: "26px"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
}