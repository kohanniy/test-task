import { alpha } from '@mui/material/styles';

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const COMMON = {
  black: '#000',
  white: '#fff',
};

const GREY = {
  0: '#FFFFFF',
  50: '#C5C5C5',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const PRIMARY = {
  main: '#4D61F6',
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
  grey: GREY,
  chart: CHART_COLORS,
  text: {
    primary: COMMON.black,
    secondary: COMMON.white,
    disabled: GREY[500],
  },
};

export default palette;
