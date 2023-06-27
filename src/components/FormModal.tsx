import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  CircularProgress,
} from '@mui/material';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  onAddItem: () => void;
  setItemName: (name: string) => void;
  itemName: string;
  titleName: string;
  loading: boolean;
  columnName: string;
}
const FormModal = ({
  open,
  onClose,
  onAddItem,
  setItemName,
  itemName,
  titleName,
  loading,
  columnName,
}: DialogProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{titleName}</DialogTitle>
      <DialogContent sx={{ my: 2 }}>
        <TextField
          defaultValue={columnName ?? ''}
          label="Name"
          variant="outlined"
          size="small"
          fullWidth
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={onAddItem}
          variant="contained"
          color="primary"
          disabled={loading}
          startIcon={
            loading ? <CircularProgress size={20} color="inherit" /> : null
          }
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export { FormModal };
