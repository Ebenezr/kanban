import React from 'react';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const ContainerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999,
  backgroundColor: 'rgba(0,0,0,0.5)',
});

interface LoadingSpinnerProps {
  loading: boolean;
}

const LoadingSpinner = ({ loading }: LoadingSpinnerProps) => {
  return (
    <>
      {loading && (
        <ContainerBox>
          <CircularProgress />
        </ContainerBox>
      )}
    </>
  );
};

export default LoadingSpinner;
