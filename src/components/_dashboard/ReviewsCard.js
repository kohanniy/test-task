import React from 'react';
import CardTemplate from '../CardTemplate';
import reviews from '../../_mocks_/reviews';
import { Avatar, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StackStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.subtrateBorderRadius,
  paddingTop: theme.spacing(1.25),
  paddingBottom: theme.spacing(1.25),
  paddingLeft: theme.spacing(1.25),
  paddingRight: theme.spacing(2.25),
  alignItems: 'center',

  '& .MuiButton-root': {
    marginLeft: 'auto',
  },

  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(1.375),
    paddingRight: theme.spacing(2.6),
  },
}));

const ImageStyle = styled(Avatar)(({ theme }) => ({
  width: '48px',
  borderRadius: 0.5 * theme.shape.borderRadius,
  [theme.breakpoints.up('md')]: {
    width: '61px',
  },
}));

export default function ReviewsCard({ sx = null }) {
  return (
    <CardTemplate title='Creative Reviews' moreButtonText='2 more reviews' sx={sx}>
      <StackStyle direction='row' spacing={{ xs: 1.25, md: 1.75 }}>
        <ImageStyle src={reviews.image} alt='cover' />
        <Stack direction='column' spacing={0.5}>
          <Typography variant='subtitle1' component='p'>
            {reviews.title}
          </Typography>
          <Typography variant='body2' component='p' sx={{ color: 'grey.300' }}>
            {reviews.timestamp}
          </Typography>
        </Stack>
        <Button variant='pink'>Needs Review</Button>
      </StackStyle>
    </CardTemplate>
  );
}
