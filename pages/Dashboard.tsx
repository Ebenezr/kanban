import React from 'react';
import { Button, Grid, Stack } from '@mui/material';
const Dashboard = () => {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <h1>Using Material UI with Next.js 13</h1>
      <Stack direction="row" columnGap={1}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Grid>
  );
};

export { Dashboard };
