export const apexChartsStyles = (theme) => ({
  '& .apexcharts-radialbar-track .apexcharts-radialbar-area': {
    stroke: theme.palette.background.default,
    strokeOpacity: 0.1,
  },

  '& .apexcharts-radialbar-area': {
    strokeWidth: 6,
    strokeLinecap: 'round',
  },
});
