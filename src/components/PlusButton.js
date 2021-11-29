import React from 'react';
import { IconButton } from '@mui/material';

const PlusIcon = ({ width = 11, height = 11 }) => (
  <svg width={width} height={height} viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.014 4.973V0.373999H4.586V4.973H0.00800001V6.401H4.586V11H6.014V6.401H10.592V4.973H6.014Z'
      fill='#2D2D2D'
    />
  </svg>
);

export default function PlusButton({ iconWidth, iconHeight, ...props}) {
  return (
    <IconButton {...props}>
      <PlusIcon width={iconWidth} height={iconHeight} />
    </IconButton>
  );
}
