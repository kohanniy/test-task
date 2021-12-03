import HelveticaNeueLightTTF from '../../assets/fonts/HelveticaNeueCyr-Light.ttf';
import HelveticaNeueLightWoff from '../../assets/fonts/HelveticaNeueCyr-Light.woff';
import HelveticaNeueLightWoff2 from '../../assets/fonts/HelveticaNeueCyr-Light.woff2';

import HelveticaNeueRegularTTF from '../../assets/fonts/HelveticaNeueCyr-Roman.ttf';
import HelveticaNeueRegularWoff from '../../assets/fonts/HelveticaNeueCyr-Roman.woff';
import HelveticaNeueRegularWoff2 from '../../assets/fonts/HelveticaNeueCyr-Roman.woff2';

import HelveticaNeueMediumTTF from '../../assets/fonts/HelveticaNeueCyr-Medium.ttf';
import HelveticaNeueMediumWoff from '../../assets/fonts/HelveticaNeueCyr-Medium.woff';
import HelveticaNeueMediumWoff2 from '../../assets/fonts/HelveticaNeueCyr-Medium.woff2';

import HelveticaNeueBoldTTF from '../../assets/fonts/HelveticaNeueCyr-Bold.ttf';
import HelveticaNeueBoldWoff from '../../assets/fonts/HelveticaNeueCyr-Bold.woff';
import HelveticaNeueBoldWoff2 from '../../assets/fonts/HelveticaNeueCyr-Bold.woff2';

export default function CssBaseline() {
  return {
    MuiCssBaseline: {
      styleOverrides:`
        @font-face {
          font-family: 'Helvetica Neue';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Helvetica Neue Light'), local('Helvetica-Neue-Light'),
                url(${HelveticaNeueLightWoff2}) format('woff2'),
                url(${HelveticaNeueLightWoff}) format('woff'),
                url(${HelveticaNeueLightTTF}) format('truetype');
        }
        @font-face {
          font-family: 'Helvetica Neue';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Helvetica Neue Roman'), local('Helvetica-Neue-Roman'),
                url(${HelveticaNeueRegularWoff2}) format('woff2'),
                url(${HelveticaNeueRegularWoff}) format('woff'),
                url(${HelveticaNeueRegularTTF}) format('truetype');
        }
        @font-face {
          font-family: 'Helvetica Neue';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Helvetica Neue Medium'), local('Helvetica-Neue-Medium'),
                url(${HelveticaNeueMediumWoff2}) format('woff2'),
                url(${HelveticaNeueMediumWoff}) format('woff'),
                url(${HelveticaNeueMediumTTF}) format('truetype');
        }
        @font-face {
          font-family: 'Helvetica Neue';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Helvetica Neue Bold'), local('Helvetica-Neue-Bold'),
                url(${HelveticaNeueBoldWoff2}) format('woff2'),
                url(${HelveticaNeueBoldWoff}) format('woff'),
                url(${HelveticaNeueBoldTTF}) format('truetype');
        }
      `,
    },
  };
}



