import React from 'react';
import Chart from 'react-apexcharts';
import {
  Box as MuiBox,
  Typography,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import { apexChartsStyles } from './apexChartsStyles';

import {
  getLabels,
  getSeries,
  getBaseChartOptions,
} from '../../utils/chartOptions';

const Box = styled(MuiBox)(({ theme }) => ({
  width: '300px',
  height: '277px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  ...apexChartsStyles(theme),

  '@media (max-width: 360px)': {
    width: '263px',
    height: '235px',
  },
}));

export default function MultiChart({ projects, colors }) {
  const theme = useTheme();
  
  const labels = getLabels(projects);

  const series = getSeries(projects);

  const chartOptions = getBaseChartOptions(theme, colors, labels, series);

  return (
    <Box>
      <Typography
        variant='subtitle2'
        component='p'
        sx={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        100%
      </Typography>
      <Typography
        variant='subtitle2'
        component='p'
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translate(50%, -50%)',
          right: {
            xs: '5px',
            lg: 0,
          },
        }}
      >
        25%
      </Typography>
      <Typography
        variant='subtitle2'
        component='p'
        sx={{
          position: 'absolute',
          bottom: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        50%
      </Typography>
      <Typography
        variant='subtitle2'
        component='p'
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          left: {
            xs: '5px',
            lg: 0,
          },
        }}
      >
        75%
      </Typography>
      <Chart height='100%' options={chartOptions} series={series} type='radialBar' />
    </Box>
  );
}
