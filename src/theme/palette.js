const COMMON = {
  black: '#000',
  white: '#fff',
};

const GREY = {
  0: '#FFFFFF',
  50: '#C5C5C5',
  100: '#EDEDED',
  200: '#F8F8F8',
  300: '#7D7D7D',
  400: '#2D2D2D',
};

const PRIMARY = {
  light: '#4DACF6',
  main: '#4D61F6',
  dark: '#674DF6',
  contrastText: '#fff',
};

const GREEN = {
  main: '#32DBBB',
};

const PINK = {
  main: '#FE5B81',
};

const CHART_COLORS = {
  yellow: '#FFA800',
  pink: '#FE5B81',
  green: '#32DBBB',
  blue: '#4DACF6',
  darkBlue: '#674DF6',
};

const palette = {
  common: { ...COMMON },
  primary: { ...PRIMARY },
  green: { ...GREEN },
  pink: { ...PINK },
  grey: { ...GREY },
  chart: { ...CHART_COLORS },
  text: {
    primary: COMMON.black,
    secondary: COMMON.white,
  },
};

export default palette;
