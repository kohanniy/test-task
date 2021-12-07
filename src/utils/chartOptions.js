export const getLabels = (data) => data.map((item) => item.name);

export const getSeries = (data) =>
  data.map((item) => {
    const { totalDays, leftDays } = item;

    return Math.round(((totalDays - leftDays) * 100) / totalDays);
  });

export const getBaseChartOptions = (theme, colors, labels, series) => {
  const formatData = (data) => (Array.isArray(data) ? data : [data]);

  return {
    chart: {
      type: 'radialBar',
      parentHeightOffset: 0,
    },
    plotOptions: {
      radialBar: {
        inverseOrder: true,
        dataLabels: {
          name: {
            color: theme.palette.text.secondary,
            ...theme.typography.h5,
          },
          value: {
            color: theme.palette.text.secondary,
            ...theme.typography.body1,
          },
        },
      },
    },
    labels: formatData(labels),
    colors: formatData(colors),
    series: formatData(series),
    fill: {
      opacity: 1,
    },
  };
};

export const singleChartOptions = {
  plotOptions: {
    radialBar: {
      dataLabels: {
        show: false,
      },
    },
  },
};
