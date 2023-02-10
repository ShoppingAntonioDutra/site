/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        dark: '1px 1px 1px gray',
        dark1:'1px 1px 1px black',
        branco1:'1px 1px 1px white',
      },
      colors: {
        'tema-site': '#1B1A17',
        'segundo-tema-site': '#FFCB29',
        'terceiro': '#F5821C',
        'teste': '#E1301C',
        'branco': '#E6D5B8',
      },
      letterSpacing: {
        widest: '0.5em',
      },
      fontFamily: {
        minhaFonte: [ 'Kanit'],
      },
      boxShadow: {
        'meu': '0px 5px 5px 0px rgba(0,0,0,0.75)',
      }
      
    
    },
  },
  plugins: [],
}
