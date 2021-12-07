import React from 'react';
import { CardContent as MuiCardContent, Typography, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import DarkCard from '../DarkCard';

const CardContent = styled(MuiCardContent)(({ theme }) => ({
  paddingLeft: '30px',
  paddingTop: '32px',
  paddingBottom: '40px',
  paddingRight: '25px',
  '&:last-child': {
    paddingBottom: '40px',
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: '55px',
    paddingLeft: '62px',
    paddingRight: '59px',
    paddingBottom: '54px',

    '&:last-child': {
      paddingBottom: '54px',
    },
  },

  [theme.breakpoints.up('lg')]: {
    position: 'absolute',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: '5px',

  [theme.breakpoints.up('md')]: {
    marginBottom: '8px',
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  color: theme.palette.grey[50],

  [theme.breakpoints.up('md')]: {
    fontSize: '30px',
    lineHeight: theme.typography.h2.lineHeight,
  },
}));

const Link = styled((props) => <MuiLink underline='none' {...props} />)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

export default function WelcomeCard({ sx = null, ...props }) {
  return (
    <DarkCard sx={sx} {...props}>
      <CardContent>
        <Title component='h1' variant='h2'>
          Happy Tuesday, Lily.
        </Title>
        <Text>
          Lorem ipsum dolor sit amet, dicam diceret molestiae in his. Eum putent possit ea. Ex mei{' '}
          <Link href='#'>discere</Link> feugiat, pri ex nisl delicata sapientem, quod bonorum
          appetere te per. Offendit dissentiunt at nam, <Link href='#'>ea has</Link> illud dolore
          deseruisse.
        </Text>
      </CardContent>
    </DarkCard>
  );
}
