import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

import NavSection from '../../components/NavSection';
import PlusButton from '../../components/PlusButton';

import AccountPopover from './AccountPopover';

import sidebarConfig from '../../_mocks_/sidebar';
import SearchButton from '../../components/SearchButton';

const MENU_WIDTH = 66;
const MENU_HEIGHT = 66;

const RootStyle = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  flexShrink: 0,
  minWidth: MENU_WIDTH,
  minHeight: MENU_HEIGHT,
  padding: theme.spacing(0, 2.5),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'column',
    padding: theme.spacing(3.625, 0, 1.5),
  },
}));

export default function DashboardSidebar() {
  return (
    <RootStyle>
      <Stack
        direction={{ xs: 'row', md: 'column' }}
        spacing={{ xs: 0.625, md: 1.75 }}
        sx={{ alignItems: 'center', ml: { xs: 1.25, md: 0 } }}
      >
        <NavSection navConfig={sidebarConfig} />
        <PlusButton />
      </Stack>
      <Stack direction='row' alignItems='center' spacing={1.5}>
        <AccountPopover />
        <SearchButton sx={{ width: '40px', height: '40px', display: { md: 'none' } }} />
      </Stack>
    </RootStyle>
  );
}
