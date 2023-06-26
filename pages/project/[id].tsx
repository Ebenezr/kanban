import React from 'react';
import { useRouter } from 'next/router';
import { GET_PROJECT } from '../../src/graphql/queries';
import { useQuery } from '@apollo/client';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { ColumnCard } from '@/src/components/ColumnCard';
const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: { id },
    skip: !id, // Skip the query if id is not yet available
  });

  if (loading)
    return (
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        sx={{ p: 2, pb: 0 }}
        className=" text-gray-600"
      >
        Loading...
      </Typography>
    );
  if (error)
    return (
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        sx={{ p: 2, pb: 0 }}
        className=" text-gray-600"
      >
        Oops! Something went wrong ....
      </Typography>
    );

  return (
    <Box sx={{ width: '100%', maxWidth: 650, p: 4 }}>
      <Grid container spacing={2}>
        {data?.project?.columns?.map((column: any) => (
          <Grid item xs={7} key={column.id}>
            <ColumnCard id={column.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Project;
