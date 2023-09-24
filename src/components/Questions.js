import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { colors } from '../utils/colors';

function Questions() {
  return (
    <Container
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 9,
      }}
    >
      <Button
        sx={{
          border: `4px solid ${colors.black[800]}`,
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography
          variant="h4"
          component="span"
          fontFamily={'Anton'}
          color={colors.black[800]}
        >
          Got any questions? Need help?
        </Typography>
      </Button>
      <Typography
        variant="subtitle1"
        sx={{ my: 3 }}
        fontFamily={'Roboto'}
        fontSize={'1.5rem'}
      >
        We are here to help. Get in touch!
      </Typography>
      <Box
        component="img"
        src="/static/themes/onepirate/productBuoy.svg"
        alt="buoy"
        sx={{ width: 60 }}
      />
    </Container>
  );
}

export default Questions;
