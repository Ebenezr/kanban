import React from 'react';
import Typography from '@mui/material/Typography';
const Navbar = () => {
  return (
    <Typography
      variant="h5"
      gutterBottom
      component="div"
      sx={{ p: 2, pb: 0 }}
      className="font-semibold text-gray-700"
    >
      Kanban
    </Typography>
  );
};

export { Navbar };
