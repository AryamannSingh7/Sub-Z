/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'main': '#09325B',
        'bgcolor': '#5CDB95',
        'grad': ''
      },
      boxShadow:{
        '3xl':'4px4px 0px 3px #000',
      },
      backgroundImage:{
         'onion': "url('images/background')", 
      }
    },
    fontFamily:{
      'Ubuntu': ['Ubuntu'],
      'Quicksand': ['Quicksand'],
    }
    
  },
  plugins: [],
}

