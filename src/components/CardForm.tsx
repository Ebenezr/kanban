import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  CircularProgress,
} from '@mui/material';
import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
interface CardProps {
  columnId: string;
  projectId: string;
  refetch: () => void;
  setShowCardForm: React.Dispatch<React.SetStateAction<boolean>>;
  mutationName: any;
  queryName: any;
}

const CardForm = ({
  columnId,
  projectId,
  refetch,
  setShowCardForm,
  mutationName,
  queryName,
}: CardProps) => {
  const [addItem, { loading }] = useMutation(mutationName, {
    refetchQueries: [{ query: queryName }],
  });
  const [cardName, setCardName] = useState('');

  const handleAddItem = () => {
    const variables: { name: string; projectId?: string; columnId?: string } = {
      name: cardName,
    };

    if (columnId) {
      variables.columnId = columnId;
    } else if (projectId) {
      variables.projectId = projectId;
    }
    console.log(variables);
    addItem({ variables })
      .then(() => {
        refetch();
        setCardName('');
        setShowCardForm(false);
      })
      .catch((error) => {
        console.error('Error adding project:', error);
      });
  };

  return (
    <Card sx={{ boxShadow: 'none' }}>
      <CardContent>
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          fullWidth
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small">Cancel</Button>
        <Button size="small" variant="contained" onClick={handleAddItem}
          disabled={loading}
          startIcon={
            loading ? <CircularProgress size={20} color="inherit" /> : null
          }
        >
          ADD
        </Button>
      </CardActions>
    </Card>
  );
};

export { CardForm };
