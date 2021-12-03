import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

export default function CardTemplate({ title, children, moreButtonText = '', sx }) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        pt: '18px',
        pb: '21px',
        px: {
          xs: '18px',
          md: '22px',
        },
        ...sx
      }}
    >
      <Typography sx={{ mb: 2.5 }} component='h3' variant='subtitle1' align='center'>{title}</Typography>
      <CardContent
        sx={{
          p: 0,
          '&:last-child': {
            p: 0,
          },
        }}
      >
        {children}
      </CardContent>
        {moreButtonText && (
          <CardActions
            sx={{
              mt: 1.5,
              display: 'flex',
              justifyContent: 'center',
              p: 0,
            }}
          >
            <Button
              variant='outlined'
              sx={{
                color: 'text.primary',
                py: '6px',
                width: '100%',
                maxWidth: '163px',
                borderColor: 'grey.100',
                '&:hover': {
                  borderColor: 'common.black'
                }
              }}
            >
              {moreButtonText}
            </Button>
          </CardActions>
        )}
    </Card>
  );
}
