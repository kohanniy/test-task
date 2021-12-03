export const getBaseChartOptions = (theme, colors, labels, series) => {
  return {
    chart: {
      background: 'transparent',
      fontFamily: theme.typography.fontFamily,
      foreColor: theme.palette.text.secondary,
      // toolbar: { show: false },
      type: 'radialBar',
    },
    colors: Array.isArray(colors) ? colors : [colors],
    labels: Array.isArray(labels) ? labels : [labels],
    plotOptions: {
      radialBar: {
        inverseOrder: true,
        track: {
          background: theme.palette.background.default,
          opacity: 0.1,
        },
        dataLabels: {
          name: {
            color: theme.palette.text.secondary,
            offsetY: -20,
            ...theme.typography.h2,
          },
          value: {
            color: theme.palette.text.secondary,
            ...theme.typography.body1,
          },
        },
      },
    },
    series: Array.isArray(series) ? series : [series],
    stroke: {
      lineCap: 'round',
    },
    fill: {
      opacity: 1,
    },
  };
};

export const multiChartOptions = {
  chart: {
    offsetY: 6,
  },
  plotOptions: {
    radialBar: {
      inverseOrder: true,
      track: {
        strokeWidth: '100%',
        margin: 7,
      },
    },
  },
};

export const singleChartOptions = {
  plotOptions: {
    radialBar: {
      inverseOrder: true,
      track: {
        strokeWidth: '75%',
        margin: 27,
      },
    },
  },
};

export const getLabels = (data) => data.map((item) => item.name);

export const getSeries = (data) =>
  data.map((item) => {
    const { totalDays, leftDays } = item;

    return Math.round(((totalDays - leftDays) * 100) / totalDays);
  });
