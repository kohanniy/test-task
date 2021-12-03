import { useState } from 'react';
import { Stack } from '@mui/material';
import WelcomeCard from './WelcomeCard';
import ChartCard from './ChartCard';

const welcomeCardStyles = (open) => ({
  width: {
    xs: 1,
    lg: open ? 0 : 'calc(2 * 100% / 3 - 8px)',
  },
  transition: (theme) =>
    theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: '0.6s',
    }),
});

const chartCardStyles = (open) => ({
  flexGrow: 1,
  transition: (theme) =>
    theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: '0.6s',
    }),
});

function WelcomeWithChartCards() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);
  
  return (
    <Stack
      sx={{ maxHeight: { xs: 'auto', lg: 357 } }}
      direction={{ xs: 'column', lg: 'row' }}
      spacing={{ xs: 2, lg: open ? 0 : 2 }}
    >
      <WelcomeCard sx={welcomeCardStyles(open)} />
      <ChartCard sx={chartCardStyles(open)} toggleDrawer={toggleDrawer} open={open} />
    </Stack>
  );
}

export default WelcomeWithChartCards;
