/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Modal } from '@mui/material'
import { theme } from '../../../Theme/theme'

export const types = {
    edit: {
        height: '500px',
        width: '500px',
        responsive: {
            '@media (max-width: 767px)': {
                height: '80%',
                width: '80%',
            },
            '@media (min-width: 768px) and (max-width: 900px)': {
                height: '70%',
                width: '70%',
            },
        },
    },
    home: {
        height: '600px',
        width: '600px',
        responsive: {
            '@media (max-width: 767px)': {
                height: '90%',
                width: '90%',
            },
            '@media (min-width: 768px) and (max-width: 900px)': {
                height: '80%',
                width: '80%',
            },
        },
    },
}
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

const MainModal = styled.div(({ size, appearance }) => {
    const { height, width, responsive } = types[size]
    return {
        position: 'absolute',
        backgroundColor: '#ffffff',
        boxShadow: '0 0 0 50vmax rgba(0,0,0,.5)',
        padding: '1rem',
        animation: `${animations[appearance]} 0.4s`,
        animationFillMode: 'forwards',
        borderRadius: '10px',
        color: theme.color.gray_600,
        button: {
            position: 'absolute',
            top: 10,
            right: 10,
        },
        height,
        width,
        ...responsive,
    }
})
const CustomModal = styled(Modal)``

export { MainModal, CustomModal }
