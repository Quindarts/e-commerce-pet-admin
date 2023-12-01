/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Modal } from '@mui/material';

const sizes = {
  'square': { width: 400, height: 400 },
  'tall': { width: 300, height: 600 },
  'fat': { width: 500, height: 300 },
};

const animations = {
  'bottom_left': keyframes`
      0% { top: 100%; left: 0; transform: translate(0, 0); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
  'top': keyframes`
      0% { top: 0; left: 50%; transform: translate(-50%, 0); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
  'top_right': keyframes`
      0% { top: 0; left: 100%; transform: translate(0, 0); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
  'left': keyframes`
      0% { top: 50%; left: 0; transform: translate(0, -50%); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
  'right': keyframes`
      0% { top: 50%; left: 100%; transform: translate(0, -50%); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
  'bottom_right': keyframes`
      0% { top: 100%; left: 100%; transform: translate(0, 0); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
  'bottom': keyframes`
      0% { top: 100%; left: 50%; transform: translate(-50%, 0); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
  'top_left': keyframes`
      0% { top: 0; left: 0; transform: translate(0, 0); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
  'center': keyframes`
      0% { opacity: 0; top: 50%; left: 50%; transform: translate(-50%, -50%);}
      100% { opacity: 1; top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
};

const MainModal = styled.div(({ size, appearance }) => ({
  position: 'absolute',
  ...sizes[size],
  backgroundColor: '#ffffff',
  boxShadow: 24,
  padding: '1rem',
  animation: `${animations[appearance]} 1s`,
  animationFillMode: 'forwards',
  borderRadius: '10px',
}));

const CustomModal = styled(Modal)`
 &{
  color: white,
 }
`

export { MainModal, CustomModal }
