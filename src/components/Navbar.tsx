import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const StyledTypography = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingBottom: 0,
  fontWeight: 'bold',
  color: 'gray',
}));
const Navbar = () => {
  return (
    <StyledTypography variant="h5" gutterBottom>
      Kanban
    </StyledTypography>
  );
};

export default Navbar;
