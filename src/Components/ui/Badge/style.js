import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { theme } from '../../../Theme/theme'

const colorMap = {
    green: { main: theme.color.jade, text: theme.color.white },
    blue: { main: theme.color.badge_blue, text: theme.color.white },
    red: { main: theme.color.pink_900, text: theme.color.white },
    red_text: { main: 'transparent', text: theme.color.pink_900 },
    gray: { main: theme.color.gray_light, text: theme.color.gray_dark },
    green_text: {main: 'transparent', text: theme.color.jade },
    pink: { main: theme.color.light_pink, text: theme.color.pink_900 },
}

export const StyledBadge = styled(({ shape, border, className, ...other }) => (
    <Badge className={className} {...other} />
))(({ shape, border, theme }) => {
    const borderStyle = border ? `2px solid #fff` : 'none'
    const borderRadius = shape === 'square' ? '4px' : ''

    return {
        '& .MuiBadge-badge': {
            border: borderStyle,
            borderRadius: borderRadius,
            maxWidth: '150px',
            whiteSpace: 'nowrap',
            color: theme.palette.text.primary,
        },
    }
})
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
