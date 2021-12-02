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
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          width: '100%',
          height: '100%',
          background: 'linear-gradient(0deg, #1E183C 62.3%, #05060B 93.31%)',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },

        img: { display: 'block', maxWidth: '100%' },

        // Lazy Load Img
        // '.blur-up': {
        //   WebkitFilter: 'blur(5px)',
        //   filter: 'blur(5px)',
        //   transition: 'filter 400ms, -webkit-filter 400ms',
        // },
        // '.blur-up.lazyloaded ': {
        //   WebkitFilter: 'blur(0)',
        //   filter: 'blur(0)',
        // },
      }}
    />
  );
}
