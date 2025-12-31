/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#0F1115",
        foreground: "#E6E6E6",
        muted: "#A8A8A8",
        card: "#161A22",
        border: "#242836",
        accent: "#4DA3FF",
      },
    },
  },

  plugins: [],
};
