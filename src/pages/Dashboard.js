import { Grid } from '@mui/material';

import {
  WelcomeWithChartCards,
  VideoCard,
  ReviewsCard,
  CallTeamCard,
  AccountManagerCard,
  RecentDocumentsCard,
} from '../components/_dashboard';

export default function Dashboard() {
  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12} sx={{ height: { lg: 395 } }}>
        <WelcomeWithChartCards sx={{ height: '100%' }} />
      </Grid>

      <Grid item xs={12} lg={4} container spacing={2.5}>
        <Grid item xs={12} md={4} lg={12}>
          <ReviewsCard />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={6}>
          <CallTeamCard />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={6}>
          <AccountManagerCard />
        </Grid>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <RecentDocumentsCard />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <VideoCard />
      </Grid>
    </Grid>
  );
}
