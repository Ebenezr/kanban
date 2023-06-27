import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { GET_PROJECT } from '../../src/graphql/queries';
import { useQuery } from '@apollo/client';
import { Grid, Typography, Button, Card, Snackbar } from '@mui/material';
import Box from '@mui/material/Box';
import { ColumnCard } from '@/src/components/ColumnCard';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Alert from '@mui/material/Alert';
import { DocumentNode } from 'graphql';
import { CardForm } from '@/src/components/CardForm';
import { ADD_COLUMN } from '../../src/graphql/mutations';
const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  const projectId = Array.isArray(id) ? id[0] : id;
  const { data, loading, error, refetch } = useQuery(GET_PROJECT, {
    variables: { id },
    skip: !id, // Skip the query if id is not yet available
  });

  const [open, setOpen] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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
    <Box sx={{ mx: 'auto', p: 4 }} className="w-4/5">
      <Grid container spacing={2}>
        {data?.project?.columns?.map((column: any, index: number) => (
          <React.Fragment key={column.id}>
            <Grid item xs={2.4}>
              <ColumnCard id={column.id} refetch={refetch} />
            </Grid>
          </React.Fragment>
        ))}
        {(data?.project?.columns?.length || 0) < 5 && (
          <Grid item xs={2.4}>
            <Card sx={{ maxWidth: 345 }}>
              {true && (
                <CardActions
                  disableSpacing
                  sx={{
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                    justifyContent: 'center',
                  }}
                >
                  {!showCardForm && (
                    <Button
                      onClick={() => {
                        setShowCardForm(true);
                      }}
                      color="primary"
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      Add Column
                    </Button>
                  )}
                  {showCardForm && (
                    <CardForm
                      columnId=""
                      projectId={projectId ?? ''}
                      refetch={refetch}
                      setShowCardForm={setShowCardForm}
                      mutationName={ADD_COLUMN}
                      queryName={GET_PROJECT}
                    />
                  )}
                </CardActions>
              )}
            </Card>
          </Grid>
        )}
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          Maximum of 5 columns allowed.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Project;
