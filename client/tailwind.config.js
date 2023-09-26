/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],

  content: [],
  theme: {
    extend: {
      colors:{
        'ltlm-yellow':"#f4ce14",
        'ltlm-darkgreen':'#495e57',
        'tomato':'#ee9972',
        'ltlm-gray':'#EDEFEE',
      }
    },
    
  },
  plugins: [require('@tailwindcss/forms'),],
}

