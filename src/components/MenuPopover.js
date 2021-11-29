import { Popover } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const ArrowStyle = styled('span')(({ theme }) => ({
  top: -7,
  zIndex: 1,
  width: 12,
  right: 20,
  height: 12,
  content: "''",
  position: 'absolute',
  borderRadius: '0 0 4px 0',
  transform: 'rotate(-135deg)',
  background: theme.palette.background.paper,
  borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  [theme.breakpoints.up('md')]: {
    bottom: 12,
    left: -6,
    top: 'unset',
    right: 'unset',
  },
}));

export default function MenuPopover({ children, sx, ...other }) {
  return (
    <Popover
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          ml: { xs: 0.5, md: 6.25 },
          mt: { xs: 1.4, md: 0 },
          overflow: 'inherit',
          width: 200,
          ...sx,
        },
      }}
      {...other}
    >
      <ArrowStyle />
      {children}
    </Popover>
  );
}
