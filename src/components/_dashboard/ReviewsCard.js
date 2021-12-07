import React from 'react';
import CardTemplate from '../CardTemplate';
import reviews from '../../_mocks_/reviews';
import { Stack as MuiStack, Avatar as MuiAvatar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Stack = styled(MuiStack)(({ theme }) => ({
  alignItems:'center',
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.subtrateBorderRadius,
  paddingTop: '10px',
  paddingRight: '17px',
  paddingBottom: '10px',
  paddingLeft: '8px',

  [theme.breakpoints.up('lg')]: {
    paddingRight: '23px',
    paddingLeft: '11px'
  }
}));

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: '48px',
  borderRadius: 0.5 * theme.shape.borderRadius,
  marginRight: '10px',

  [theme.breakpoints.up('lg')]: {
    width: '61px',
    marginRight: '14px',
  },
}));

export default function ReviewsCard() {
  return (
    <CardTemplate title='Creative Reviews' moreButtonText='2 more reviews'>
      <Stack direction='row'>
        <Avatar src={reviews.image} alt='cover' />
        <MuiStack spacing={0.5} sx={{ mr: '5px' }}>
          <Typography variant='body1' component='p'>
            {reviews.title}
          </Typography>
          <Typography variant='caption' component='p' sx={{ color: 'grey.300' }}>
            {reviews.timestamp}
          </Typography>
        </MuiStack>
        <Button variant='pink' sx={{ ml: 'auto' }}>Needs Review</Button>
      </Stack>
    </CardTemplate>
  );
}
