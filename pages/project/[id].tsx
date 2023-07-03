import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GET_PROJECT } from '../../src/graphql/queries';
import { useQuery } from '@apollo/client';
import { Grid, Button, Card, Snackbar } from '@mui/material';

import ColumnCard from '@/src/components/ColumnCard';
import CardActions from '@mui/material/CardActions';
import Alert from '@mui/material/Alert';
import { DocumentNode } from 'graphql';
import CardForm from '@/src/components/CardForm';
import { ADD_COLUMN } from '../../src/graphql/mutations/columns';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import ErrorComponent from '@/src/components/Error';
import { ContainerBox } from '../Projects';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: '345px',
});
const StyledCardActions = styled(CardActions)({
  borderTop: '1px solid rgba(0,0,0,0.1)',
  justifyContent: 'center',
});
const StyledButton = styled(Button)({
  display: 'flex',
  justifyContent: 'center',
});

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  const projectId = Array.isArray(id) ? id[0] : id;
  const { data, loading, error, refetch } = useQuery(GET_PROJECT, {
    variables: { id },
    skip: !id, // Skip the query if id is not yet available
  });

  const [showCardForm, setShowCardForm] = useState(false);

  const [isWarningOpen, setWarningOpen] = useState(false);
  const [isErrorOpen, setErrorOpen] = useState(false);

  // check column count whenever data changes
  useEffect(() => {
    const columnCount = data?.project?.columns?.length || 0;

    if (columnCount === 4) {
      setWarningOpen(true);
    } else {
      setWarningOpen(false);
    }

    if (columnCount >= 5) {
      setErrorOpen(true);
    } else {
      setErrorOpen(false);
    }
  }, [data]);

  return (
    <>
      <LoadingSpinner loading={loading} />
      <ErrorComponent error={error} />
      <ContainerBox>
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
              <StyledCard>
                {true && (
                  <StyledCardActions disableSpacing>
                    {!showCardForm && (
                      <StyledButton
                        onClick={() => {
                          setShowCardForm(true);
                        }}
                        color="primary"
                      >
                        Add Column
                      </StyledButton>
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
                  </StyledCardActions>
                )}
              </StyledCard>
            </Grid>
          )}
        </Grid>
        {(data?.project?.columns?.length || 0) === 5 && (
          <Snackbar
            open={isErrorOpen}
            autoHideDuration={6000}
            onClose={() => setErrorOpen(false)}
          >
            <Alert onClose={() => setErrorOpen(false)} severity="error">
              Maximum of 5 columns allowed.
            </Alert>
          </Snackbar>
        )}
        {(data?.project?.columns?.length || 0) === 4 && (
          <Snackbar
            open={isWarningOpen}
            autoHideDuration={6000}
            onClose={() => setWarningOpen(false)}
          >
            <Alert onClose={() => setWarningOpen(false)} severity="warning">
              Only one column remaining.
            </Alert>
          </Snackbar>
        )}
      </ContainerBox>
    </>
  );
};

export default Project;
