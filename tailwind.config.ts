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
      },
      fontFamily: {
        varien: ["varien", "sans-serif"],
        jura: ["jura", "sans-serif"],
      },
      backgroundImage: {
        "bg-image": "url(/images/background.png)",
      },
    },
  },
  plugins: [],
} satisfies Config;
