import * as React from 'react';
import { useSnackbar } from 'notistack';
import Button from '../Button/Button';
import { styles } from './style';

const Snackbar = ({ message = 'Default message', variant = 'default', styleName }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSnackbar = () => {
    enqueueSnackbar(message, { variant });
  };

  return (
      <Button style={styles[styleName]} onClick={handleSnackbar}>Show snackbar</Button>
  );
};

export default Snackbar;