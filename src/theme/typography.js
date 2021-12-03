function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ md }) {
  return {
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
  };
}

const FONT_PRIMARY = '"Helvetica Neue", sans-serif';

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 1.43,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ md: 30 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: pxToRem(16),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 2,
    fontSize: pxToRem(15),
  },
  h4: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(13),
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.25,
    fontSize: pxToRem(12),
  },
  body1: {
    fontWeight: 300,
    fontSize: pxToRem(22),
    lineHeight: 1.73,
    ...responsiveFontSizes({ md: 24 }),
  },
  body2: {
    fontWeight: 500,
    lineHeight: 1.18,
    fontSize: pxToRem(11),
  },
  button: {
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: pxToRem(10),
    textTransform: 'capitalize',
  },
};

export default typography;
