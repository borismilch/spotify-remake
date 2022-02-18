module.exports = {
  mode: 'jit',

  dark: 'class',

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#212121',
        sidebar: "#000000",
        card: "#171717",
        cardHover: "#282828",
        play: "#1ed760",
        title: "#fcfcfc",
        desc: '#8d8d8d',
        text: '#808080',
        light: '#3e3e3e',
        l2: "#2d2b2b",
        borderColor: "#202022",
        activeColor: "#176232"
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), 
    require('@tailwindcss/forms'), 
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')
  ],
};
