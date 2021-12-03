import React from 'react';
import Chart from 'react-apexcharts';

import { merge } from 'lodash';
import { motion } from 'framer-motion';

import {
  IconButton,
  CardContent as MuiCardContent,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import {
  getLabels,
  getSeries,
  getBaseChartOptions,
  singleChartOptions,
  multiChartOptions,
} from '../../utils/chartOptions';
import DarkCard from '../DarkCard';
import projects from '../../_mocks_/projects';

const CardContent = styled(MuiCardContent)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%',
  padding: theme.spacing(5, 0),
  '&:last-child': {
    paddingBottom: theme.spacing(5),
  },
  '& .apexcharts-canvas svg': {
    height: '392px',
  },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
}));

function ChartCard({ sx, toggleDrawer, open }) {
  const theme = useTheme();

  const matchesLg = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  const labels = getLabels(projects);

  const series = getSeries(projects);

  const colors = [
    theme.palette.chart.yellow,
    theme.palette.chart.pink,
    theme.palette.chart.green,
    theme.palette.chart.darkBlue,
    theme.palette.chart.blue,
  ];

  const chartOptions = merge(getBaseChartOptions(theme, colors, labels, series), multiChartOptions);

  return (
    <DarkCard sx={sx}>
      <IconButton
        onClick={toggleDrawer}
        sx={{
          color: 'text.secondary',
          position: 'absolute',
          top: open ? '22px' : 0,
          right: open ? '20px' : 'auto',
          left: open ? 'auto' : '15px',
          zIndex: 'tooltip',
        }}
      >
        {open ? <RemoveCircleOutlineIcon /> : <MoreHorizIcon />}
      </IconButton>
      <CardContent>
        {open ? (
          <>
            <Typography
              sx={{ display: 'flex', alignItems: 'center' }}
              variant='subtitle2'
              component='p'
            >
              <WarningAmberIcon sx={{ width: 23, height: 21, mr: 1 }} /> 2 Pending Reviews
            </Typography>
            <List
              disablePadding
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: {
                  xs: 'column',
                  lg: 'row',
                },
              }}
            >
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
                    component={motion.li}
                    transition={{ duratiion: 1, ease: 'linear' }}
                    initial={matchesLg ? { opacity: 0 } : { transform: 'scale(0.3)' }}
                    animate={matchesLg ? { opacity: 1 } : { transform: 'scale(1)' }}
                    key={`${name}${index}`}
                    disablePadding
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: (theme) => theme.transitions.create('transform'),
                      '@media (hover: hover)': {
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                  >
                    <Chart
                      height={280}
                      width='100%'
                      options={options}
                      series={options.series}
                      type='radialBar'
                    />
                  </ListItem>
                );
              })}
            </List>
          </>
        ) : (
          <Chart
            height={matchesSm ? 300 : 350}
            width='100%'
            options={chartOptions}
            series={series}
            type='radialBar'
          />
        )}
      </CardContent>
    </DarkCard>
  );
}

export default ChartCard;
