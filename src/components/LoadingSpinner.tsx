import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

// Define styles using makeStyles
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  text: {
    padding: '16px',
    paddingBottom: '0px',
    color: 'gray',
  },
});

// Define component props
interface LoadingSpinnerProps {
  loading: boolean;
}

const LoadingSpinner = ({ loading }: LoadingSpinnerProps) => {
  // Invoke makeStyles
  const classes = useStyles();

  // Component return
  return (
    <>
      {loading && (
        <Box className={classes.root}>
          <CircularProgress />
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            className={classes.text}
          >
            Loading...
          </Typography>
        </Box>
      )}
    </>
  );
};

export default LoadingSpinner;
