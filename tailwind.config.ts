import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        paper: "#F5F5F0",
        bone: "#F1EFE8",
        clay: "#EAE6DA",
        panel: "#0D0D0D",
        line: "rgba(245,245,240,0.14)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
