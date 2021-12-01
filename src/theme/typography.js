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
  // h2: {
  //   fontWeight: 700,
  //   lineHeight: 64 / 48,
  //   fontSize: pxToRem(32),
  //   ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  // },
  // h3: {
  //   fontWeight: 700,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(24),
  //   ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  // },
  // h4: {
  //   fontWeight: 700,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(20),
  //   ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  // },
  // h5: {
  //   fontWeight: 700,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(18),
  //   ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  // },
  // h6: {
  //   fontWeight: 700,
  //   lineHeight: 28 / 18,
  //   fontSize: pxToRem(17),
  //   ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  // },
  // subtitle1: {
  //   fontWeight: 600,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(16),
  // },
  // subtitle2: {
  //   fontWeight: 600,
  //   lineHeight: 22 / 14,
  //   fontSize: pxToRem(14),
  // },
  body1: {
    fontWeight: 300,
    fontSize: pxToRem(22),
    lineHeight: 1.73,
    ...responsiveFontSizes({ md: 24 }),
  },
  // body2: {
  //   lineHeight: 22 / 14,
  //   fontSize: pxToRem(14),
  // },
  // caption: {
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(12),
  // },
  // overline: {
  //   fontWeight: 700,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(12),
  //   letterSpacing: 1.1,
  //   textTransform: 'uppercase',
  // },
  // button: {
  //   fontWeight: 700,
  //   lineHeight: 24 / 14,
  //   fontSize: pxToRem(14),
  //   textTransform: 'capitalize',
  // },
};

export default typography;
