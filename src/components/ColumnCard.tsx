<<<<<<< HEAD
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import CardForm from './CardForm';
import { useMutation, useQuery } from '@apollo/client';
import { GET_COLUMN, GET_PROJECT } from '../graphql/queries';
import { DELETE_COLUMN, UPDATE_COLUMN } from '../graphql/mutations/columns';
import { ADD_CARD, CLEAR_CARDS } from '../graphql/mutations/cards';
import { DocumentNode } from 'graphql';
import FormModal from './FormModal';
interface ColumnCardProps {
  id: string;
  refetch: () => void;
}
const ColumnCard = ({ id, refetch }: ColumnCardProps) => {
  const [showCardForm, setShowCardForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [columnName, setColumnName] = useState('');
  const {
    data,
    loading,
    error,
    refetch: refetchColumn,
  } = useQuery(GET_COLUMN, {
    variables: { id },
    skip: !id,
  });
  // delete a column
  const [deleteColumn, { loading: deleting }] = useMutation(DELETE_COLUMN, {
    refetchQueries: [{ query: GET_PROJECT }],
  });
  const handleDeleteColumn = (columnId: string) => {
    deleteColumn({ variables: { id: columnId } })
      .then(() => {
        refetch();
      })
      .catch((error) => {
        console.error('Error deleting project:', error);
      });
  };

  // clears all column's cards
  const [clearColumnCards, { loading: clearing }] = useMutation(CLEAR_CARDS, {
    refetchQueries: [{ query: GET_COLUMN }],
  });

  const handleClearColumnCards = (columnId: string) => {
    clearColumnCards({ variables: { columnId: columnId } })
      .then(() => {
        refetchColumn();
      })
      .catch((error) => {
        console.error('Error deleting Cards:', error);
      });
  };

  // update column name
  const [updateColumn, { loading: updating }] = useMutation(UPDATE_COLUMN, {
    refetchQueries: [{ query: GET_COLUMN }],
  });

  const handleColumnUpdate = () => {
    updateColumn({ variables: { name: columnName, id: id } })
      .then(() => {
        handleCloseModal();
        refetch();
      })
      .catch((error) => {
        console.error('Error updating column', error);
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
                <Button size="small" onClick={handleOpenModal}>
                  Rename
                </Button>
                <Button
                  onClick={() => handleClearColumnCards(id)}
                  disabled={clearing}
                  startIcon={
                    clearing ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : null
                  }
                >
                  Clear
                </Button>
                <Button
                  size="small"
                  onClick={() => handleDeleteColumn(id)}
                  disabled={deleting}
                  startIcon={
                    deleting ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : null
                  }
                >
                  Delete
                </Button>
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
            projectId={''}
            refetch={refetchColumn}
            setShowCardForm={setShowCardForm}
            mutationName={ADD_CARD}
            queryName={GET_COLUMN}
          />
        )}
      </CardActions>
      <FormModal
        open={openModal}
        onClose={handleCloseModal}
        onAddItem={handleColumnUpdate}
        setItemName={setColumnName}
        itemName={columnName}
        titleName="Rename Column"
        loading={updating}
        columnName={data?.column?.name}
      />
    </Card>
  );
};

export default ColumnCard;
=======
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {
  Button,
  Box,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import { CardForm } from './CardForm';
import { useMutation, useQuery } from '@apollo/client';
import { GET_COLUMN, GET_PROJECT } from '../graphql/queries';
import {
  CLEAR_CARDS,
  DELETE_COLUMN,
  UPDATE_COLUMN,
} from '../graphql/mutations';
import { ADD_CARD } from '../graphql/mutations';
import { DocumentNode } from 'graphql';
import { FormModal } from './FormModal';
interface ColumnCardProps {
  id: string;
  refetch: () => void;
}
const ColumnCard = ({ id, refetch }: ColumnCardProps) => {
  const [showCardForm, setShowCardForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [columnName, setColumnName] = useState('');
  const {
    data,
    loading,
    error,
    refetch: refetchColumn,
  } = useQuery(GET_COLUMN, {
    variables: { id },
    skip: !id,
  });
  // delete a column
  const [deleteColumn, { loading: deleting }] = useMutation(DELETE_COLUMN, {
    refetchQueries: [{ query: GET_PROJECT }],
  });
  const handleDeleteColumn = (columnId: string) => {
    deleteColumn({ variables: { id: columnId } })
      .then(() => {
        refetch();
      })
      .catch((error) => {
        console.error('Error deleting project:', error);
      });
  };

  // clears all column's cards
  const [clearColumnCards, { loading: clearing }] = useMutation(CLEAR_CARDS, {
    refetchQueries: [{ query: GET_COLUMN }],
  });

  const handleClearColumnCards = (columnId: string) => {
    clearColumnCards({ variables: { columnId: columnId } })
      .then(() => {
        refetchColumn();
      })
      .catch((error) => {
        console.error('Error deleting Cards:', error);
      });
  };

  // update column name
  const [updateColumn, { loading: updating }] = useMutation(UPDATE_COLUMN, {
    refetchQueries: [{ query: GET_COLUMN }],
  });

  const handleColumnUpdate = () => {
    updateColumn({ variables: { name: columnName, id: id } })
      .then(() => {
        handleCloseModal();
        refetch();
      })
      .catch((error) => {
        console.error('Error updating column', error);
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
                <Button size="small" onClick={handleOpenModal}>
                  Rename
                </Button>
                <Button
                  onClick={() => handleClearColumnCards(id)}
                  disabled={clearing}
                  startIcon={
                    clearing ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : null
                  }
                >
                  Clear
                </Button>
                <Button
                  size="small"
                  onClick={() => handleDeleteColumn(id)}
                  disabled={deleting}
                  startIcon={
                    deleting ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : null
                  }
                >
                  Delete
                </Button>
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
            projectId={''}
            refetch={refetchColumn}
            setShowCardForm={setShowCardForm}
            mutationName={ADD_CARD}
            queryName={GET_COLUMN}
          />
        )}
      </CardActions>
      <FormModal
        open={openModal}
        onClose={handleCloseModal}
        onAddItem={handleColumnUpdate}
        setItemName={setColumnName}
        itemName={columnName}
        titleName="Rename Column"
        loading={updating}
        columnName={data?.column?.name}
      />
    </Card>
  );
};

export { ColumnCard };
>>>>>>> 6a838621c4e29462353a997aa677bb2c8f8973f1
