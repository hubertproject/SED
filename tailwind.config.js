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
      colors: {
        'main': '#e002a2',
        'second': '#47019d',
        'whitey': '#f7fcfb',
        'black': '#212121',
        'white': '#ffffff',
        'goldenYellow': '#FFDF00',
        'gray': '#808080e2',
        'gwhite:':'#03192e',
        'blueblack':'#01032b',
        'whit' :'#dae8e5',
        'maroon':'#800000',
        'gold':'#FFA500',
        'off-white':'#F8F0E3',
        'white-smoke':'#F5F5F5',
        'deep-blue':'#0C023E',
        'maroona':'#8f2525',
        'maroonn':'#5c0606',
        'bluee':'#4545ba',
        'blown':'#621919',
        'blownny':'#511515'


      },
      margin: {
        '30': '30px',
      },
    },
  },
  plugins: [],
}
