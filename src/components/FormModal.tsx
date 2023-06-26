import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  onAddProject: () => void;
  setItemName: (name: string) => void;
  itemName: string;
}
const FormModal = ({
  open,
  onClose,
  onAddProject,
  setItemName,
  itemName,
}: DialogProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Project</DialogTitle>
      <DialogContent sx={{ my: 2 }}>
        <TextField
          label="Project Name"
          variant="outlined"
          size="small"
          fullWidth
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onAddProject} variant="contained" color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export { FormModal };
