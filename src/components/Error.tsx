import React from 'react';
import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: '#ffcccc',
  },
  text: {
    color: 'gray',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
});

interface ErrorComponentProps {
  error: any;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error }) => {
  const classes = useStyles();

  if (error) {
    return (
      <Box className={classes.container}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className={classes.text}
        >
          Oops! Something went wrong...
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          className={classes.error}
        >
          {error.message}
        </Typography>
      </Box>
    );
  }

  return null;
};

export default ErrorComponent;
