import { alpha } from '@mui/material/styles';

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.buttonBorderRadius,
        },
      },
      variants: [
        {
          props: { variant: 'pink' },
          style: {
            backgroundColor: theme.palette.pink.main,
            color: theme.palette.text.secondary,
            ...theme.typography.body2,
            '&:hover': {
              backgroundColor: alpha(theme.palette.pink.main, 0.7),
            },
          },
        },
      ],
    },
  };
}
