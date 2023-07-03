// main navbar
import React from 'react';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/material';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';
const StyledTypography = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingBottom: 0,
  fontWeight: 'bold',
  color: 'gray',
}));

const StyledTypographySmall = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingBottom: 0,
  paddingRight: '2px',
  fontWeight: 'bold',
  color: 'gray',
  display: 'flex',
  justifyItems: 'center',
  fontSize: 'small',
}));

const Navbar = () => {
  return (
    <>
      <Tooltip title="Home">
        <Link href="/" className="font-semibold  no-underline ">
          <StyledTypography variant="h5" gutterBottom>
            Kanban
          </StyledTypography>
        </Link>
      </Tooltip>
      <Box className=" flex items-center justify-start">
        <StyledTypography variant="h5" gutterBottom>
          Dashboard
        </StyledTypography>
        <StyledTypographySmall variant="h6" gutterBottom>
          <ChevronRightIcon /> Kanban
        </StyledTypographySmall>
      </Box>
    </>
  );
};

export default Navbar;
