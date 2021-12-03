export default function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: theme.shape.cardBorderRadius,
          position: 'relative',
          zIndex: 0,
        },
      },
    },
  };
}
