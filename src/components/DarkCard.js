import { alpha, styled } from '@mui/material/styles';
import { Card } from '@mui/material';

const DarkCard = styled(Card)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.default, 0.1),
  color: theme.palette.text.secondary,
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
}));

export default DarkCard;