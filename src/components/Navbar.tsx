<<<<<<< HEAD
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

export default Navbar
=======
// main navbar
import React from "react";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box } from "@mui/material";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
const Navbar = () => {
  return (
    <>
      <Tooltip title="Home">
        <Link href="/" className="font-semibold  no-underline ">
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ p: 2, pb: 0 }}
            className="font-semibold text-gray-700"
          >
            Kanban
          </Typography>
        </Link>
      </Tooltip>
      <Box className=" flex items-center justify-start">
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ pl: 2, pb: 0 }}
          className=" text-gray-600 flex items-center"
        >
          Dashboard
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ pl: 2, pb: 0 }}
          className=" text-gray-500 flex text-sm items-center"
        >
          <ChevronRightIcon /> Kanban
        </Typography>
      </Box>
    </>
  );
};

export { Navbar };
>>>>>>> 6a838621c4e29462353a997aa677bb2c8f8973f1
