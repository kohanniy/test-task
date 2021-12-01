import React from 'react';
import { Card, CardContent, Typography, Link as MuiLink, useMediaQuery } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import Scrollbar from '../ScrollBar';

const Link = (props) => (
  <MuiLink
    underline='none'
    sx={{
      fontWeight: 'bold',
      color: 'common.white',
      '&:hover': {
        color: 'primary.dark',
      },
    }}
    {...props}
  />
);

export default function WelcomeCard({ sx = null }) {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Card
      sx={{
        bgcolor: alpha('#fff', 0.1),
        color: 'text.secondary',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        ...sx,
      }}
    >
      <Scrollbar>
        <CardContent
          sx={{
            px: {
              xs: 3.125,
              md: 7.5,
            },
            py: {
              xs: 5,
              md: 7.5,
            },
            '&:last-child': {
              pb: 7.5,
            },
          }}
        >
          <Typography variant='h1' sx={{ mb: 2.5 }}>
            Happy Tuesday, Lily.
          </Typography>
          <Typography
            component='p'
            variant={matchesMd ? 'h1' : 'body1'}
            sx={{
              color: 'grey.50',
              fontWeight: 'fontWeightLight',
            }}
          >
            Lorem ipsum dolor sit amet, dicam diceret molestiae in his. Eum putent possit ea. Ex mei{' '}
            <Link href='#'>discere</Link> feugiat, pri ex nisl delicata sapientem, quod bonorum
            appetere te per. Offendit dissentiunt at nam, <Link href='#'>ea has</Link> illud dolore
            deseruisse.
          </Typography>
        </CardContent>
      </Scrollbar>
    </Card>
  );
}