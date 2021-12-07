import React from 'react';
import { IconButton as MuiIconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0px 2px 4px rgba(9, 15, 52, 0.0434604)',
  borderRadius: '29px',
  color: theme.palette.text.secondary,
  transition: 'opacity 0.3s linear',

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    opacity: '0.7',
  },
}));

export default function SearchButton(props) {
  return (
    <IconButton aria-label='search' {...props}>
      <SearchIcon />
    </IconButton>
  );
}
