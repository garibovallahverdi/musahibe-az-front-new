/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Tailwind'in tarayacağı dosyaları belirtin
    "./public/index.html",
  ],
  darkMode: "class", // Dark mod için "class" seçeneğini etkinleştir
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        backgroundSecond: "rgb(var(--backgroundSecond) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        buttonBg: "rgb(var(--button-bg) / <alpha-value>)",
        buttonText: "rgb(var(--button-text) / <alpha-value>)",
        cardBg: "rgb(var(--card-bg) / <alpha-value>)",
        cardText: "rgb(var(--card-text) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
