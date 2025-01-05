import { content, plugin } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    content,
  ],
  theme: {
    extend: {
      colors: {
        text: {
          "brand-accent": "#7AE002",
          "secondary-accent": "#01F1FE",
        },
        background: {
          "bg-dark-brown": "#2A1B0D",
          "bg-light-brown": "#D4A56B",
        },
      },
    },
  },
  plugins: [plugin()],
};
