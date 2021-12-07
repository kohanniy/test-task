import React from 'react';
import { Typography as MuiTypography, Stack, Button as MuiButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CardTemplate from '../CardTemplate';

const Container = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
}));

const Typography = styled(MuiTypography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: '19px',
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  justifyContent: 'center',

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'column',
  },

  '@media (min-width: 1450px)': {
    flexDirection: 'row',
  },
}));

const Button = styled(MuiButton)(({ theme }) => ({
  ...theme.typography.overline,
  textTransform: 'capitalize',
  boxShadow: 'none',
  width: '100%',
  maxWidth: '91px',
  '&:hover': {
    boxShadow: 'none',
  },

  [theme.breakpoints.up('lg')]: {
    maxWidth: '101px',
  },
}));

const DetailsButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey[400],
  backgroundColor: theme.palette.grey[100],

  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },

  [theme.breakpoints.up('lg')]: {
    maxWidth: '56px',
  },

}));

export default function CallTeamCard() {
  return (
    <CardTemplate title='Call with The Team' moreButtonText='7 more events'>
      <Container>
        <Typography component='p' variant='h3'>
          In 43 min
        </Typography>
        <ButtonContainer>
          <Button variant='contained'>Join Zoom</Button>
          <DetailsButton
            variant='contained'
          >
            Details
          </DetailsButton>
        </ButtonContainer>
      </Container>
    </CardTemplate>
  );
}
