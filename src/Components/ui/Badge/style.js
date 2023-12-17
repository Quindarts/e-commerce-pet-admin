import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react'; 

const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
`;

export const BadgeWrapper = styled('span')`
    position: absolute;
    ${props => props.position.split('-')[0]}: 0;
    ${props => props.position.split('-')[1]}: 0;
    height: ${props => props.size};
    width: ${props => props.size};
    border: 2px solid white;
    border-radius: 50%;
    background-color: ${props => props.color};
    animation: ${props => props.animation.includes('blink') ? css`${blink} 1s infinite` : 'none'};
`;
