import { Outlet } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import DashboardSidebar from './DashboardSidebar';
import { Box } from '@mui/material';

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'auto',
  background: 'linear-gradient(0deg, #1E183C 62.3%, #05060B 93.31%)',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const ContentContainerStyle = styled('main')(({ theme }) => ({
  boxSizing: 'border-box',
  flexGrow: 1,
  paddingTop: 41,
  paddingBottom: 66,
  paddingLeft: 22,
  paddingRight: 22,
  [theme.breakpoints.up('md')]: {
    paddingTop: 43,
    paddingBottom: 104,
    paddingLeft: 66,
    paddingRight: 66,
  },
}));

export default function DashboardLayout() {
  return (
    <RootStyle>
      <DashboardSidebar />
      <Box component='main' flexGrow={1}>
        <ContentContainerStyle>
          <Outlet />
        </ContentContainerStyle>
      </Box>
    </RootStyle>
  );
}
