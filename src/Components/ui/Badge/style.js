import { Badge } from '@mui/material'
import { styled } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { COLOR } from '../../../Utils/Constants'

export function getStyledBadge(shape) {
    switch (shape) {
        case 'round':
            return StyledBadgeRound
        case 'square':
            return StyledBadgeSquare
        default:
            return Badge
    }
}

export const StyledBadgeRound = styled(Badge)(({ theme, border }) => ({
    '& .MuiBadge-badge': {
        border: border ? `2px solid #fff` : 'none',
        maxWidth: '150px',
        whiteSpace: 'nowrap',
        color: theme.palette.text.primary,
    },
}))

export const StyledBadgeSquare = styled(StyledBadgeRound)(({ theme }) => ({
    '& .MuiBadge-badge': {
        borderRadius: '4px',
    },
}))
const colorMap = {
    green: { main: COLOR.green, text: COLOR.white },
    blue: { main: COLOR.badge_blue, text: COLOR.white },
    red: { main: COLOR.red, text: COLOR.white },
    red_text: { main: COLOR.gray_light, text: COLOR.red },
    gray: { main: COLOR.gray_light, text: COLOR.gray_dark },
    green_text: { main: COLOR.gray_light, text: COLOR.green },
    pink: { main: COLOR.light_pink, text: COLOR.red },
}

export const createDynamicTheme = (type) => {
    const colors = colorMap[type]
    if (colors) {
        return createTheme({
            palette: {
                [type]: {
                    main: colors.main,
                },
                text: {
                    primary: colors.text,
                },
            },
        })
    }
    return createTheme()
}
