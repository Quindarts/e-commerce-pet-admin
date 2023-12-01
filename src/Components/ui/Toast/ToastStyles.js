
import styled from '@emotion/styled';
import Snackbar from '@mui/material/Snackbar';

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

export default StyledSnackbar