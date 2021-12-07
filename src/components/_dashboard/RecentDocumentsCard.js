import React from 'react';
import { List as MuiList, ListItem as MuiListItem, ListItemAvatar, Button as MuiButton, Avatar as MuiAvatar, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import CardTemplate from '../CardTemplate';
import { DocumentIcon, BrandIcon } from './Icons';

import recentDocuments from '../../_mocks_/recentDocuments';

const List = styled(MuiList)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '11px',
  height: '100%',
  justifyContent: 'center',
}));

const ListItem = styled(MuiListItem)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.substrateBorderRadius,
  padding: '13px 20px',

  [theme.breakpoints.up('md')]: {
    paddingLeft: '25px',
    paddingRight: '25px'
  }
}));

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  borderRadius: theme.shape.iconBorderRadius,
  width: '46px',
  height: '46px',
}));

const Button = styled(MuiButton)(({ theme }) => ({
  borderRadius: '12px',
  width: '57px',
  transition: 'opacity 0.3s linear',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  marginLeft: 'auto',
  ...theme.typography.body2,


  '&:hover': {
    opacity: 0.8,
  },
}));

const FinalButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.green.main,

  '&:hover': {
    backgroundColor: theme.palette.green.main,
  },
}));

const DraftButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],

  '&:hover': {
    backgroundColor: theme.palette.grey[50],
  },
}));

export default function RecentDocumentsCard() {
  return (
    <CardTemplate title='Recent Documents' moreButtonText='7 more documents'>
      <List disablePadding>
        {recentDocuments.map((document) => (
          <ListItem key={document.id}>
            <ListItemAvatar sx={{ mr: '14px' }}>
              <Avatar
                variant='rounded'
                sx={{
                  bgcolor: document.iconType === 'document' ? 'primary.dark' : 'primary.light',
                }}
              >
                {document.iconType === 'document' ? <DocumentIcon /> : <BrandIcon />}
              </Avatar>
            </ListItemAvatar>
            <Stack spacing={0.5} sx={{ mr: 1 }}>
              <Typography variant='body1' component='p' sx={{ color: 'grey.400' }}>{document.name}</Typography>
              <Typography variant='caption' component='p' sx={{ color: 'grey.300' }}>{document.timestamp}</Typography>
            </Stack>
            {
              document.state === 'final' ? (<FinalButton>Final</FinalButton>) : (<DraftButton>Draft</DraftButton>)
            }
          </ListItem>
        ))}
      </List>
    </CardTemplate>
  );
}
