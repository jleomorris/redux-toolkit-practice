module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home_bg:
          'url(https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/e_gradient_fade,x_0.5,b_black/v1630675027/redux-counter-quote-generator/home.jpg)',
        chuck:
          'url(https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/e_gradient_fade,x_0.8,b_black/v1630661079/redux-counter-quote-generator/quote-generator/main-background.jpg)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
