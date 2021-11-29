import ThemeConfig from './theme';

import Router from './routes';

import GlobalStyles from './theme/globalStyles';

export default function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Router />
    </ThemeConfig>
  );
}
