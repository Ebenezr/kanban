import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button, Box, TextField, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import { CardForm } from './CardForm';
import { useMutation, useQuery } from '@apollo/client';
import { GET_COLUMN } from '../graphql/queries';
import { CLEAR_CARDS } from '../graphql/mutations';
interface ColumnCardProps {
  id: string;
}
const ColumnCard = ({ id }: ColumnCardProps) => {
  const [showCardForm, setShowCardForm] = useState(false);

  const { data, loading, error, refetch } = useQuery(GET_COLUMN, {
    variables: { id },
    skip: !id,
  });

  // clears all column's cards
  const [clearColumnCards] = useMutation(CLEAR_CARDS, {
    refetchQueries: [{ query: GET_COLUMN }],
  });

  const handleClearColumnCards = (columnId: string) => {
    clearColumnCards({ variables: { columnId: columnId } })
      .then(() => {
        refetch();
      })
      .catch((error) => {
        console.error('Error deleting Cards:', error);
      });
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const idPop = open ? 'popover' : undefined;

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
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={data?.column?.name}
        sx={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
        action={
          <>
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreHorizIcon />
            </IconButton>
            <Popover
              id={idPop}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  p: 2,
                  gap: 2,
                }}
              >
                <Button size="small">Rename</Button>
                <Button onClick={() => handleClearColumnCards(id)}>
                  Clear
                </Button>
                <Button size="small">Delete</Button>
              </Box>
            </Popover>
          </>
        }
      />
      <CardContent>
        {data?.column?.cards?.map((card: any) => (
          <Box
            key={card.id}
            sx={{
              border: '1px solid rgba(0,0,0,0.1)',
              p: 2,
              mb: 2,
            }}
          >
            {card?.name}
          </Box>
        ))}
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          borderTop: '1px solid rgba(0,0,0,0.1)',
          justifyContent: 'center',
        }}
      >
        {!showCardForm && (
          <Button
            size="small"
            onClick={() => {
              setShowCardForm(true);
            }}
          >
            Add Card
          </Button>
        )}
        {showCardForm && (
          <CardForm
            columnId={data?.column?.id}
            refetch={refetch}
            setShowCardForm={setShowCardForm}
          />
        )}
      </CardActions>
    </Card>
  );
};

export { ColumnCard };
