import { Outlet } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import DashboardSidebar from './DashboardSidebar';
import { Box, Container } from '@mui/material';
import SearchButton from '../../components/SearchButton';

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  background: 'linear-gradient(0deg, #1E183C 62.3%, #05060B 93.31%)',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1409px',
  width: '100%',
  flexShrink: 0,
  paddingTop: 41,
  paddingBottom: 66,

  [theme.breakpoints.up('md')]: {
    paddingTop: 43,
    paddingBottom: 104,
  },
}));

export default function DashboardLayout() {
  return (
    <>
      <RootStyle>
        <DashboardSidebar />
        <Box component='main' flexGrow={1}>
          <ContentContainer maxWidth='false'>
            <Outlet />
          </ContentContainer>
        </Box>
      </RootStyle>
      <SearchButton
        sx={{
          position: 'absolute',
          bottom: '12px',
          right: '25px',
          display: { xs: 'none', md: 'inline-flex' },
        }}
      />
    </>
  );
}
