import React from 'react';
import Chart from 'react-apexcharts';

import { merge } from 'lodash';
import { motion } from 'framer-motion';

import {
  Typography,
  List as MuiList,
  ListItem as MuiListItem,
  Box,
  Stack as MuiStack,
} from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { styled, useTheme } from '@mui/material/styles';

import { apexChartsStyles } from './apexChartsStyles';

import { getBaseChartOptions, singleChartOptions } from '../../utils/chartOptions';

const List = styled(MuiList)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  overflow: 'hidden',

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },
}));

const ListItem = styled(MuiListItem)({
  justifyContent: 'center',
});

const ListItemBox = styled(Box)(({ theme }) => ({
  height: '300px',
  width: '210px',
  position: 'relative',
  transition: 'transform 0.3s linear',
  ...apexChartsStyles(theme),

  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const Stack = styled(MuiStack)(({ theme }) => ({
  alignItems: 'center',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, calc(-50% - 15px))',
  top: '50%',
}));

export default function SingleChartsList({ projects, colors }) {
  const theme = useTheme();

  return (
    <>
      <Typography sx={{ display: 'flex', alignItems: 'center' }} variant='body1' component='p'>
        <WarningAmberIcon sx={{ width: 23, height: 21, mr: 1 }} /> 2 Pending Reviews
      </Typography>
      <List disablePadding>
        {projects.map((project, index) => {
          const { name, totalDays, leftDays } = project;
          const labels = name;
          const series = Math.round(((totalDays - leftDays) * 100) / totalDays);
          const options = merge(
            getBaseChartOptions(theme, colors[index], labels, series),
            singleChartOptions
          );

          return (
            <ListItem
              key={`${name}${index}`}
              disablePadding
              component={motion.li}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.8, ease: 'linear' } }}
            >
              <ListItemBox>
                <Chart height='100%' options={options} series={options.series} type='radialBar' />
                <Stack>
                  <Typography variant='h1' component='p' sx={{ mb: 1.5 }}>
                    {leftDays}
                  </Typography>
                  <Typography variant='h5' component='p'>
                    days left
                  </Typography>
                  <Typography variant='body1' component='p' sx={{ color: 'grey.50', mt: '3px' }}>
                    before launch
                  </Typography>
                </Stack>
                <Typography
                  component='p'
                  variant='h5'
                  sx={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  {name}
                </Typography>
              </ListItemBox>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
