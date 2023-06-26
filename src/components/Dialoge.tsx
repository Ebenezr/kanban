import { useState } from 'react';
import {
  Button,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
import { ADD_PROJECT } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import { GET_PROJECTS } from '../graphql/queries';
interface AddProjectDialogProps {
  open: boolean;
  onClose: () => void;
  onAddProject: () => void;
}
const AddProjectDialog = ({
  open,
  onClose,
  onAddProject,
}: AddProjectDialogProps) => {
  const [projectName, setProjectName] = useState('');
  const [addProject] = useMutation(ADD_PROJECT, {
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  const handleAddProject = () => {
    addProject({ variables: { name: projectName } })
      .then(() => {
        setProjectName('');
        onAddProject();
      })
      .catch((error) => {
        console.error('Error adding project:', error);
      });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Project</DialogTitle>
      <DialogContent sx={{ p: 2 }}>
        <TextField
          label="Project Name"
          variant="outlined"
          fullWidth
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddProject} variant="contained" color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export { AddProjectDialog };
