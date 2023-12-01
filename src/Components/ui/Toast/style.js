
import styled from '@emotion/styled';
import Snackbar from '@mui/material/Snackbar';

const CustomToast =  styled(Snackbar)(({ theme, appearance }) => ({
  '& .MuiSnackbarContent-root': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: '4px',
    padding: theme.spacing(1),
    animation: `${animations[appearance]} 0.5s`,
  },
}));
const animations = {
  'bottom_left': keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`,
'bottom_right': keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
`,
};

export default CustomToast