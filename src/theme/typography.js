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
    lineHeight: 60 / 73,
    fontSize: pxToRem(60),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.43,
    fontSize: 28,
    ...responsiveFontSizes({ md: 30 }),
  },
  h3: {
    fontWeight: 300,
    lineHeight: 1,
    fontSize: pxToRem(24),
  },
  h4: {
    fontWeight: 300,
    lineHeight: 1.73,
    fontSize: pxToRem(22),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 16 / 20,
    fontSize: pxToRem(16),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 1,
    fontSize: pxToRem(15),
  },
  subtitle1: {
    fontWeight: 700,
    lineHeight: 13 / 18,
    fontSize: pxToRem(13),
  },
  subtitle2: {
    fontWeight: 700,
    lineHeight: 1.25,
    fontSize: pxToRem(12),
  },
  body1: {
    fontWeight: 500,
    lineHeight: 1.25,
    fontSize: pxToRem(12),
  },
  body2: {
    fontWeight: 500,
    fontSize: pxToRem(11),
    lineHeight: 11 / 13,
  },
  caption: {
    fontWeight: 400,
    lineHeight: 11 / 13,
    fontSize: pxToRem(11),
  },
  overline: {
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: pxToRem(10),
  },
  button: {
    fontWeight: 500,
    textTransform: 'capitalize',
  },
};

export default typography;
