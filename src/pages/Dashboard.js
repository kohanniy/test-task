import { Grid, Container, Paper } from '@mui/material';
import { WelcomeWithChartCards } from '../components/_dashboard';
import VideoCard from '../components/_dashboard/VideoCard';
import video from '../assets/video/TestAnimation.mp4';

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
            <Paper sx={{ minHeight: 168 }}>Sub Top</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ minHeight: 168 }}>Sub Bottom Left</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ minHeight: 168 }}>Sub Bottom Right</Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper
            sx={{
              minHeight: '357px',
            }}
          >
            Bottom Center
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <VideoCard  />
        </Grid>
      </Grid>
    </Container>
  );
}

// const max = 3000;
// function valueToPercent(value) {
//   return (value * 100) / max;
// }
