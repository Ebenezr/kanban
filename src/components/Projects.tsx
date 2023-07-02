// displays all the projects
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { format, parseISO } from 'date-fns';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../graphql/queries';
import { ADD_PROJECT, DELETE_PROJECT } from '../graphql/mutations/projects';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Button, CardContent, Grid, TextField } from '@mui/material';
import Link from 'next/link';
import FormModal from './FormModal';

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [addProject, { loading: posting }] = useMutation(ADD_PROJECT, {
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const { data, loading, error, refetch } = useQuery(GET_PROJECTS);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

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
    <Box sx={{ width: '100%', maxWidth: 1200, p: 4, mx: 'auto' }}>
      <Grid container spacing={2} alignItems="center" sx={{ py: 2, mb: 4 }}>
        <Grid item xs={8}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            sx={{ height: '100%' }}
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            sx={{ height: '100%' }}
            onClick={handleOpen}
          >
            New Project
          </Button>
        </Grid>
      </Grid>
      <List disablePadding>
        {data?.projects?.map((project: any) => (
          <Card key={project.id} sx={{ mb: 2 }}>
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
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
            </CardContent>
          </Card>
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
    </Box>
  );
};

export default Projects;
