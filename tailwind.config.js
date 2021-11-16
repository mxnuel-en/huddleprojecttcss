module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'violet': 'hsl(257, 40%, 49%)',
        'softMagenta': 'hsl(300, 69%, 71%)'
      },
      fontFamily: {
        headers:['Poppins'],
        body:['Open Sans']
      },
      backgroundImage: {
        'mobile-bg' : "url('public/images/bg-mobile.svg')",
        'desktop-bg' : "url('public/images/bg-desktop.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
