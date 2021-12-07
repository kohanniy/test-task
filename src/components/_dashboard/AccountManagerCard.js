import React from 'react';
import { Avatar as MuiAvatar, Typography, Button as MuiButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CardTemplate from '../CardTemplate';

import avatar from '../../assets/img/manager-avatar.jpg';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'column',
    rowGap: '18px',
  },
}));

const ManagerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',

  [theme.breakpoints.up('sm')]: {
    gap: '16px',
    flexDirection: 'column',
  },

  [theme.breakpoints.up('lg')]: {
    marginTop: '15px',
  },

  '@media (min-width: 1450px)': {
    flexDirection: 'row',
  },
}));

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: '51px',
  height: '51px',
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column-reverse',
  rowGap: '10px',
  columnGap: '6px',

  '@media (min-width: 425px)': {
    flexDirection: 'row',
  }
}));

const Button = styled(MuiButton)(({ theme }) => ({
  ...theme.typography.overline,
  textTransform: 'capitalize',
  width: '91px',
  boxShadow: 'none',
  flexShrink: 0,

  [theme.breakpoints.up('md')]: {
    maxWidth: '70px'
  }
}));

export default function AccountManagerCard() {
  return (
    <CardTemplate title='Account Manager'>
      <Container>
        <ManagerContainer>
          <Avatar src={avatar} alt='manager avatar' />
          <Typography component='p' variant='subtitle1' sx={{ fontWeight: 'medium' }}>Sarah Smith</Typography>
        </ManagerContainer>
        <ButtonContainer>
          <Button variant='contained'>Slack</Button>
          <Button variant='contained'>Email</Button>
        </ButtonContainer>
      </Container>
    </CardTemplate>
  );
}
