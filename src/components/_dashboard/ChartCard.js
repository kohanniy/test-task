import React from 'react';

import { IconButton, CardContent as MuiCardContent } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import DarkCard from '../DarkCard';
import MultiChart from './MultiChart';
import SingleChartsList from './SingleChartsList';

import projects from '../../_mocks_/projects';

const CardContent = styled(MuiCardContent, { shouldForwardProp: (prop) => prop !== 'withList' })(
  ({ withList = false, theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...(!withList && {
      padding: '40px 0',
    }),

    ...(withList && {
      padding: '30px 0',
      flexDirection: 'column',
    }),

    '&:last-child': {
      paddingBottom: withList ? '30px' : '40px',
    },
  })
);

function ChartCard({ sx, toggleDrawer, open }) {
  const theme = useTheme();

  const colors = [
    theme.palette.chart.yellow,
    theme.palette.chart.pink,
    theme.palette.chart.green,
    theme.palette.chart.darkBlue,
    theme.palette.chart.blue,
  ];

  return (
    <DarkCard sx={{ ...sx }}>
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
      <CardContent withList={open}>
        {open ? (
          <SingleChartsList projects={projects} colors={colors} />
        ) : (
          <MultiChart projects={projects} colors={colors} />
        )}
      </CardContent>
    </DarkCard>
  );
}

export default ChartCard;
