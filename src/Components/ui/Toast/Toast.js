import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

function Toast({ open, handleClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Note archived"
      action={
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
        </React.Fragment>
      }
    />
  );
}

function ParentComponent() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open Toast</Button>
      <Toast open={open} handleClose={handleClose} />
    </div>
  );
}

export default ParentComponent;
