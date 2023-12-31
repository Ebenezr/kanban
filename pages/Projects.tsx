// displays all the projects
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { format, parseISO } from 'date-fns';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../src/graphql/queries';
import { ADD_PROJECT, DELETE_PROJECT } from '../src/graphql/mutations/projects';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Button, CardContent, Grid, TextField } from '@mui/material';
import Link from 'next/link';
import FormModal from '../src/components/FormModal';
import LoadingSpinner from '../src/components/LoadingSpinner';
import ErrorComponent from '../src/components/Error';
import { styled } from '@mui/system';

export const ContainerBox = styled(Box)({
  maxWidth: '80vw',
  margin: '0 auto',
});
const StyledCard = styled(Card)({
  marginBottom: '2px',
});
const StyledCardContent = styled(CardContent)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
const Projects = () => {
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [addProject, { loading: posting }] = useMutation(ADD_PROJECT, {
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const { data, loading, error, refetch } = useQuery(GET_PROJECTS);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddProject = () => {
    addProject({ variables: { name: projectName } })
      .then(() => {
        handleClose();
        refetch();
      })
      .catch((error) => {
        console.error('Error adding project:', error);
      });
  };

  const handleDeleteProject = (projectId: string) => {
    deleteProject({ variables: { id: projectId } })
      .then(() => {
        refetch();
      })
      .catch((error) => {
        console.error('Error deleting project:', error);
      });
  };

  return (
    <>
      <LoadingSpinner loading={loading} />
      <ErrorComponent error={error} />
      <ContainerBox>
        <Grid container spacing={2} alignItems="center" sx={{ py: 2, mb: 4 }}>
          <Grid item xs={8}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" fullWidth onClick={handleOpen}>
              New Project
            </Button>
          </Grid>
        </Grid>
        <List disablePadding>
          {data?.projects?.map((project: any) => (
            <StyledCard key={project.id}>
              <StyledCardContent>
                <Box>
                  <Link href={`/project/${project.id}`}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {project?.name}
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.secondary">
                    Updated At:{' '}
                    {project?.updatedAt
                      ? format(parseISO(project.updatedAt), 'MMM d, yyyy')
                      : 'Date not available'}
                  </Typography>
                </Box>
                <Button
                  onClick={() => handleDeleteProject(project.id)}
                  color="error"
                  variant="contained"
                  size="small"
                >
                  <DeleteIcon />
                </Button>
              </StyledCardContent>
            </StyledCard>
          ))}
        </List>
        <FormModal
          open={open}
          onClose={handleClose}
          onAddItem={handleAddProject}
          setItemName={setProjectName}
          itemName={projectName}
          titleName="Add New Project"
          loading={posting}
          columnName=""
        />
      </ContainerBox>
    </>
  );
};

export default Projects;
