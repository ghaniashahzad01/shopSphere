/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // <-- Important for dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      primary: '#3b82f6',      // blue-500
      secondary: '#0f172a',    // slate-900
        darkBackground: '#1a202c', // Custom dark background
        lightBackground: '#ffffff',
        cardDark: '#1e1e1e',
        cardLight: '#f9f9f9',
      },
    },
  },
  plugins: [],
};
