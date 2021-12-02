import React from 'react';
import { Card, CardMedia } from '@mui/material';
import video from '../../assets/video/TestAnimation.mp4'

export default function VideoCard() {
  return (
    <Card>
      <CardMedia component='video' src={video} image={video} type='video/mp4' controls preload='metadata' />
    </Card>
  );
}
