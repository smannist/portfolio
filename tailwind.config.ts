import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem"
      }
    },
    fontFamily: {
      sans: ["var(--font-opensans)"],
      mono: ["var(--font-roboto-mono)"],
      noto: ["var(--font-noto-serif)"]
    }
  },
  plugins: []
} satisfies Config;
