import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

export default function GlobalStyles() {
  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          background: 'linear-gradient(0deg, #1E183C 62.3%, #05060B 93.31%)',
          position: 'relative',
        },
        img: { display: 'block', maxWidth: '100%' },
      }}
    />
  );
}
