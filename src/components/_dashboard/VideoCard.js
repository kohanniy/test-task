import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import video from '../../assets/video/TestAnimation.mp4';

export default function VideoCard() {
  return (
    <Card
      sx={{
        height: '100%',
        '&:hover .MuiCardContent-root': {
          opacity: 1,
          visibility: 'visible',
        },
      }}
    >
      <CardMedia
        sx={{ height: '100%', objectFit: 'cover' }}
        component='video'
        src={video}
        image={video}
        type='video/mp4'
        controls
        preload='metadata'
      />
      <CardContent
        sx={{
          py: 0,
          width: '100%',
          background: (theme) => alpha(theme.palette.common.black, 0.1),
          '&:last-child': { pb: 0 },
          position: 'absolute',
          bottom: 60,
          color: 'text.secondary',
          opacity: 0,
          visibility: 'hidden',
          transition: (theme) => theme.transitions.create(['opacity', 'visibility']),
        }}
      >
        <Typography variant='h6' component='h2'>Behind the Scenes</Typography>
      </CardContent>
    </Card>
  );
}
