import { useState } from 'react';
// material
import {
  Box,
  Grid,
  Container,
  Typography,
  Paper,
  Stack,
  Drawer,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// components
// import Page from '../components/Page';
// import {
//   AppTasks,
//   AppNewUsers,
//   AppBugReports,
//   AppItemOrders,
//   AppNewsUpdate,
//   AppWeeklySales,
//   AppOrderTimeline,
//   AppCurrentVisits,
//   AppWebsiteVisits,
//   AppTrafficBySite,
//   AppCurrentSubject,
//   AppConversionRates,
// } from '../components/_dashboard/app';

// ----------------------------------------------------------------------


const DrawerStyle = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
      position: 'static',
    },
    [theme.breakpoints.up('md')]: {
      width: open ? '100%' : 'calc(100% / 3 - 8px)',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: '0.5s',
      }),
    },
  })
);

const PaperStyle = styled(Paper, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    [theme.breakpoints.up('md')]: {
      width: open ? 0 : 'calc(2 * 100% / 3 - 8px)',
      whiteSpace: 'nowrap',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: '0.5s',
      }),
    },
  })
);

export default function DashboardWk() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open)

  return (
    <Container
      maxWidth='xl'
      disableGutters
    >
      <Grid container spacing={2} sx={{ outline: '1px solid yellow' }}>
        <Grid item xs={12} sx={{ outline: '1px solid blue' }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{
              xs: 2,
              md: open ? 0 : 2,
            }}
          >
            <PaperStyle
              open={open}
              sx={{
                minHeight: '357px',
              }}
            >
              Top Left
            </PaperStyle>
            <DrawerStyle
              variant='permanent'
              hideBackdrop
              anchor={matchesMd ? 'right' : 'top'}
              open={open}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
              {
                !open ? 'Top Right' : (
                  <Box>
                    <Typography>dsjfks refrefrefe rtergr trtret</Typography>
                    <Typography>dsjfks refrefrefe rtergr trtret</Typography>
                    <Typography>dsjfks refrefrefe rtergr trtret</Typography>
                    <Typography>dsjfks refrefrefe rtergr trtret</Typography>
                    <Typography>dsjfks refrefrefe rtergr trtret</Typography>
                    <Typography>dsjfks refrefrefe rtergr trtret</Typography>
                    <Typography>dsjfks refrefrefe rtergr trtret</Typography>
                    <Typography>dsjfks refrefrefe rtergr trtret</Typography>
                    <Typography>dsjfks refrefrefe rtergr trtret</Typography>
                  </Box>
                )
              }
            </DrawerStyle>
          </Stack>
        </Grid>

        <Grid
          container
          item
          spacing={2}
          xs={12}
          md={4}
          sx={{ outline: '1px solid blue' }}
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
        <Grid item xs={12} md={4} sx={{ outline: '1px solid blue' }}>
          <Paper
            sx={{
              minHeight: '357px',
            }}
          >
            Bottom Center
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} sx={{ outline: '1px solid blue' }}>
          <Paper
            sx={{
              minHeight: '357px',
            }}
          >
            Bottom Right
          </Paper>
        </Grid>
      </Grid>
    </Container>
    // <Page title="Dashboard | Minimal-UI">
    //   <Container maxWidth="xl">
    //     <Box sx={{ pb: 5 }}>
    //       <Typography variant="h4">Hi, Welcome back</Typography>
    //     </Box>
    //     <Grid container spacing={3}>
    //       <Grid item xs={12} sm={6} md={3}>
    //         <AppWeeklySales />
    //       </Grid>
    //       <Grid item xs={12} sm={6} md={3}>
    //         <AppNewUsers />
    //       </Grid>
    //       <Grid item xs={12} sm={6} md={3}>
    //         <AppItemOrders />
    //       </Grid>
    //       <Grid item xs={12} sm={6} md={3}>
    //         <AppBugReports />
    //       </Grid>

    //       <Grid item xs={12} md={6} lg={8}>
    //         <AppWebsiteVisits />
    //       </Grid>

    //       <Grid item xs={12} md={6} lg={4}>
    //         <AppCurrentVisits />
    //       </Grid>

    //       <Grid item xs={12} md={6} lg={8}>
    //         <AppConversionRates />
    //       </Grid>

    //       <Grid item xs={12} md={6} lg={4}>
    //         <AppCurrentSubject />
    //       </Grid>

    //       <Grid item xs={12} md={6} lg={8}>
    //         <AppNewsUpdate />
    //       </Grid>

    //       <Grid item xs={12} md={6} lg={4}>
    //         <AppOrderTimeline />
    //       </Grid>

    //       <Grid item xs={12} md={6} lg={4}>
    //         <AppTrafficBySite />
    //       </Grid>

    //       <Grid item xs={12} md={6} lg={8}>
    //         <AppTasks />
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </Page>
  );
}
