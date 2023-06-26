import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { ADD_CARD } from '../graphql/mutations';
import { GET_COLUMN } from '../graphql/queries';
import { useMutation } from '@apollo/client';
interface CardProps {
  columnId: string;
  refetch: () => void;
  setShowCardForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardForm = ({ columnId, refetch, setShowCardForm }: CardProps) => {
  const [addCard] = useMutation(ADD_CARD, {
    refetchQueries: [{ query: GET_COLUMN }],
  });
  const [cardName, setCardName] = useState('');

  const handleAddCard = () => {
    addCard({ variables: { name: cardName, columnId: columnId } })
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
          label="Card Title"
          variant="outlined"
          size="small"
          fullWidth
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small">Cancel</Button>
        <Button size="small" variant="contained" onClick={handleAddCard}>
          ADD
        </Button>
      </CardActions>
    </Card>
  );
};

export { CardForm };
