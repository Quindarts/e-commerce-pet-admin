/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Modal } from '@mui/material';


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


const MainModal = styled.div(({ appearance }) => ({
  position: 'absolute',
  boxShadow: 24,
  padding: '1rem',
  animation: `${animations[appearance]} 0.5s`,
  animationFillMode: 'forwards',
  borderRadius: '10px',

  
  '@media (max-width: 600px)': {
    ...sizes['mobile'],
  },
  '@media (min-width: 601px) and (max-width: 900px)': {
    ...sizes['tablet'],
  },
  '@media (min-width: 901px) and (max-width: 1200px)': {
    ...sizes['laptop'],
  },
  '@media (min-width: 1201px)': {
    ...sizes['desktop'],
  },
}));
const Modal1 = styled(MainModal)`
  background-color: red;

  height: 25rem;
`;

const Modal2 = styled(MainModal)`
  background-color: yellow;

  height: 30rem; 
`;

const Modal3 = styled(MainModal)`
  background-color: green;
  height: 20rem; 
`;


const CustomModal = styled(Modal)`
 &{
  color: white,
 }
`
const sizes = {
  'mobile': { width: '90%' }, 
  'tablet': { width: '70%' }, 
  'laptop': { width: '60%' }, 
  'desktop': { width: '50%' }, 
};


export {MainModal, Modal1, Modal2, Modal3, CustomModal };