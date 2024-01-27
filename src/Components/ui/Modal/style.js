/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Modal } from '@mui/material'
import { theme } from '../../../Theme/theme'

const animations = {
    bottom_left: keyframes`
      0% { top: 100%; left: 0; transform: translate(0, 0); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
    top: keyframes`
      0% { top: 0; left: 50%; transform: translate(-50%, 0); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
    top_right: keyframes`
      0% { top: 0; left: 100%; transform: translate(0, 0); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
    left: keyframes`
      0% { top: 50%; left: 0; transform: translate(0, -50%); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
    right: keyframes`
      0% { top: 50%; left: 100%; transform: translate(0, -50%); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
    bottom_right: keyframes`
      0% { top: 100%; left: 100%; transform: translate(0, 0); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
    bottom: keyframes`
      0% { top: 100%; left: 50%; transform: translate(-50%, 0); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
    top_left: keyframes`
      0% { top: 0; left: 0; transform: translate(0, 0); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
    center: keyframes`
      0% { opacity: 0; top: 50%; left: 50%; transform: translate(-50%, -50%);}
      100% { opacity: 1; top: 50%; left: 50%; transform: translate(-50%, -50%); }
    `,
}

const MainModal = styled.div(({ size, appearance }) => ({
    position: 'absolute',
    width: 500,
    height: 500,
    backgroundColor: '#ffffff',
    boxShadow: '0 0 0 50vmax rgba(0,0,0,.1)',
    padding: '1rem',
    animation: `${animations[appearance]} 0.05s`,
    animationFillMode: 'forwards',
    borderRadius: '10px',
    color: theme.color.gray_600,
    '.exit_model': {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    '@media (max-width: 767px)': {
        ...sizes['mobile'],
    },
    '@media (min-width: 768px) and (max-width: 900px)': {
        ...sizes['tablet'],
    },
    '@media (min-width: 901px) and (max-width: 1200px)': {
        ...sizes['laptop'],
    },
    '@media (min-width: 1201px)': {
        ...sizes['desktop'],
    },
}))

const CustomModal = styled(Modal)`
    & {
        color: white;
    }
`
const sizes = {
    mobile: { width: '100%', height: '98vh' },
    tablet: { width: '100%', height: '98vh' },
    laptop: { width: '75%', height: '80vh' },
    desktop: { width: '50%', height: '55vh' },
}

export { MainModal, CustomModal }
