import { NavLink, matchPath, useLocation } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { List, ListItemButton, ListItem, Box } from '@mui/material';

const ListItemLinkStyle = styled((props) => <ListItemButton disableGutters {...props} />, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ isActive = false, theme }) => ({
  position: 'relative',
  padding: 0,
  '&:before': {
    bottom: -13,
    left: 0,
    width: '100%',
    minHeight: 4,
    content: "''",
    display: isActive ? 'block' : 'none',
    position: 'absolute',
    borderRadius: '5px 5px 0 0',
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 1.375, 0, 1.5),
    '&:before': {
      top: 0,
      left: 0,
      bottom: 0,
      width: 4,
      borderRadius: '0 5px 5px 0'
    },
  },
}));

const Icon = styled((props) => <img {...props} />)({});

export default function NavSection({ navConfig, ...other }) {
  const { pathname } = useLocation();
  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Box component='nav' {...other}>
      <List
        disablePadding
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', md: 'column' },
          gap: 2.75,
        }}
      >
        {navConfig.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemLinkStyle component={NavLink} to={item.path} isActive={match(item.path)}>
              <Icon
                src={item.img}
                srcSet={`${item.retinaImg} 2x`}
                sx={{ width: { xs: 41, md: 43 } }}
              />
            </ListItemLinkStyle>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
