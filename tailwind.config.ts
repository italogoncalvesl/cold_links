import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "white-main": "#F6F6F5",
        verde: "#ADEA28",
      },
      fontFamily: {
        varien: ["varien", "sans-serif"],
        jura: ["jura", "sans-serif"],
      },
      backgroundImage: {
        "bg-image": "url(/images/background.png)",
      },
      animation: {
        "loop-scroll": "loop-scroll 16s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
