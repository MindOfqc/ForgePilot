import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#252a27",
        panel: "#f2f0e8",
        line: "#d8d4c8",
        accent: "#263d35",
        warn: "#b45309"
      }
    }
  },
  plugins: []
};

export default config;
