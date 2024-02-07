/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'ise': '414px', // Example of a custom breakpoint at 414px
        'i12pro': '390px', // Example of a custom breakpoint at 640px
        's8': '360px', // Iphone 14 Pro Max
        'surduo': '540px',
        'gfold': '280px', // galaxy fold
        'a51':'412px'
      },
    },
  },
  plugins: [],
}
