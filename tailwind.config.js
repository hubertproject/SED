/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'yellow': '0 4px 8px rgba(255, 255, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

