import React from 'react';
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  Button as MuiButton,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '17px',
  height: '100%',

  [theme.breakpoints.up('lg')]: {
    paddingLeft: '22px',
    paddingRight: '22px',
  },
}));

const CardContent = styled(MuiCardContent)({
  width: '100%',
  flexGrow: 1,
  padding: 0,

  '&:last-child': {
    padding: 0,
  },
});

const CardActions = styled(MuiCardActions)(({ theme }) => ({
  padding: 0,
  marginTop: theme.spacing(1.5),
  width: '100%',
  justifyContent: 'center',
}));

const Button = styled(MuiButton)(({ theme }) => ({
  width: '100%',
  flexShrink: 0,
  maxWidth: '163px',
  border: `1px solid ${theme.palette.grey[100]}`,
  color: theme.palette.grey[400],
  fontSize: theme.typography.overline.fontSize,
  textTransform: 'none',

  '&:hover': {
    borderColor: theme.palette.grey[400],
  },
}));

export default function CardTemplate({ title, children, moreButtonText = '' }) {
  return (
    <Card>
      <Typography sx={{ mb: 2 }} component='h3' variant='body1' align='center'>
        {title}
      </Typography>
      <CardContent>{children}</CardContent>
      {moreButtonText && (
        <CardActions>
          <Button variant='outlined'>{moreButtonText}</Button>
        </CardActions>
      )}
    </Card>
  );
}
