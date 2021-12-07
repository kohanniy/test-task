import { useState } from 'react';
import { Stack } from '@mui/material';
import WelcomeCard from './WelcomeCard';
import ChartCard from './ChartCard';
import { AnimatePresence, motion } from 'framer-motion';

const welcomeCardStyles = (open) => ({
  width: {
    xs: 1,
    lg: open ? 0 : 'calc(2 * 100% / 3 - 8px)',
  },
  transition: (theme) =>
    theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: '0.5s',
    }),
});

const chartCardStyles = (open) => ({
  width: {
    xs: 1,
    lg: open ? 1 : 'calc(100% / 3 - 8px)',
  },
  transition: (theme) =>
    theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: '0.5s',
    }),
});

function WelcomeWithChartCards({ sx = null }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <Stack sx={sx} direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 2, lg: open ? 0 : 2 }}>
      <WelcomeCard sx={welcomeCardStyles(open)} />
      <ChartCard sx={chartCardStyles(open)} toggleDrawer={toggleDrawer} open={open} />
    </Stack>
  );
}

export default WelcomeWithChartCards;
