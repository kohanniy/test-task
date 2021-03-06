import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { alpha } from '@mui/material/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';

import MenuPopover from '../../components/MenuPopover';

import account from '../../_mocks_/account';

const MENU_OPTIONS = [
  {
    label: 'Item 1',
    linkTo: '#',
  },
  {
    label: 'Item 2',
    linkTo: '#',
  },
  {
    label: 'Item 3',
    linkTo: '#',
  },
];

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 41,
          height: 41,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[200], 0.72),
            },
          }),
        }}
      >
        <Avatar src={account.avatar} srcSet={`${account.avatar2x} 2x`} alt='avatar' />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant='subtitle1' noWrap>
            {account.displayName}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color='inherit' variant='outlined'>
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
