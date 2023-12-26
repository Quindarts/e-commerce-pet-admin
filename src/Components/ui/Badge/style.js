import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { COLOR } from '../../../Utils/Constants'
import { theme } from '../../../Theme/theme'

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
export const StyledBadgeRound = styled(({ theme, border, ...other }) => <Badge {...other} />)(({ theme, border }) => ({
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
        color: theme.palette.text.primary,
    },
}))

const colorMap = {
    green: { main: theme.color.jade, text: theme.color.white },
    blue: { main: theme.color.badge_blue, text: theme.color.white },
    red: { main: theme.color.pink_900, text: theme.color.white },
    red_text: { main: theme.color.gray_light, text: theme.color.pink_900 },
    gray: { main: theme.color.gray_light, text: theme.color.gray_dark },
    green_text: { main: theme.color.gray_light, text: theme.color.jade },
    pink: { main: theme.color.light_pink, text: theme.color.pink_900 },
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
