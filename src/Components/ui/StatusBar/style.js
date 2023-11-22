import styled from '@emotion/styled'
import { theme } from '../../../Theme/theme'

export const StatusBarStyle = styled('div')`
    &.status-bar {
        width: 100%;
        height: 7px;
        border: 1px solid black; //cái này giúp nhìn cho rõ cái thank status-bar thôi, sau này xóa
        border-radius: 10px;
        background-color: ${theme.color.blue_basic};
    }
`
