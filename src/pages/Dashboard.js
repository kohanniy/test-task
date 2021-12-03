import { Grid, Container, Paper, Typography } from '@mui/material';

import { WelcomeWithChartCards, VideoCard, ReviewsCard } from '../components/_dashboard';
import CardTemplate from '../components/CardTemplate';

export default function Dashboard() {
  return (
    <Container maxWidth='xl' disableGutters>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <WelcomeWithChartCards />
        </Grid>

        <Grid
          container
          item
          spacing={2}
          xs={12}
          lg={4}
          sx={{
            minHeight: '357px',
          }}
        >
          <Grid item xs={12}>
            <ReviewsCard
              sx={{
                maxHeight: {
                  xs: 'auto',
                  lg: '169px',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ minHeight: 168 }}>Sub Bottom Left</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ minHeight: 168 }}>Sub Bottom Right</Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardTemplate
            title='Recent Documents'
            moreButtonText='7 more documents'
            sx={{ height: '100%', maxHeight: '357px' }}
          >
            <Typography>sdgsfdg dfsgfdgfd fdgdfsgsdfg</Typography>
            <Typography>sdgsfdg dfsgfdgfd fdgdfsgsdfg</Typography>
          </CardTemplate>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <VideoCard />
        </Grid>
      </Grid>
    </Container>
  );
}

// 207

// const max = 3000;
// function valueToPercent(value) {
//   return (value * 100) / max;
// }
