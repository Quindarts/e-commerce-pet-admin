import Badge from '@mui/material/Badge'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import { COLOR } from '../../../Utils/Constants'

const createDynamicTheme = (type, badgeColor) => {
    let theme
    switch (type) {
        case 'green':
            theme = createTheme({
                palette: {
                    green: {
                        main: COLOR.green,
                    },
                    text: {
                        primary: COLOR.white,
                    },
                },
            })
            break
        case 'blue':
            theme = createTheme({
                palette: {
                    blue: {
                        main: COLOR.badge_blue,
                    },
                    text: {
                        primary: COLOR.white,
                    },
                },
            })
            break
        case 'red':
            theme = createTheme({
                palette: {
                    red: {
                        main: COLOR.red,
                    },
                    text: {
                        primary: COLOR.white,
                    },
                },
            })
            break
        case 'red_text':
            theme = createTheme({
                palette: {
                    red_text: {
                        main: COLOR.gray_light,
                    },
                    text: {
                        primary: COLOR.red,
                    },
                },
            })
            break
        case 'gray':
            theme = createTheme({
                palette: {
                    gray: {
                        main: COLOR.gray_light,
                    },
                    text: {
                        primary: COLOR.gray_dark,
                    },
                },
            })
            break
        case 'green_text':
            theme = createTheme({
                palette: {
                    green_text: {
                        main: COLOR.gray_light,
                    },
                    text: {
                        primary: COLOR.green,
                    },
                },
            })
            break
        case 'pink':
            theme = createTheme({
                palette: {
                    pink: {
                        main: COLOR.light_pink,
                    },
                    text: {
                        primary: COLOR.red,
                    },
                },
            })
            break
        default:
            theme = createTheme()
    }
    return theme
}
const StyledBadgeRound = styled(Badge)(({ theme, border }) => ({
    '& .MuiBadge-badge': {
        border: border ? `2px solid #fff` : 'none',
        maxWidth: '150px',
        whiteSpace: 'nowrap',
    },
}))

const StyledBadgeSquare = styled(Badge)(({ theme, border }) => ({
    '& .MuiBadge-badge': {
        borderRadius: '4px',
        maxWidth: '150px',
        whiteSpace: 'nowrap',
        border: border ? `2px solid #fff` : 'none',
    },
}))

export function BadgeWrapper({ border, badgeContent, children, variant, anchorOrigin, type, shape }) {
    const theme = createDynamicTheme(type)
    let StyledBadge

    switch (shape) {
        case 'round':
            StyledBadge = StyledBadgeRound
            break
        case 'square':
            StyledBadge = StyledBadgeSquare
            break
        default:
            StyledBadge = Badge
    }

    return (
        <ThemeProvider theme={theme}>
            <StyledBadge
                color={type}
                max={999}
                badgeContent={badgeContent}
                style={{
                    fontSize: '1px',
                }}
                overlap="circular"
                anchorOrigin={anchorOrigin}
                variant={variant}
                sx={{
                    '& .MuiBadge-badge': {
                        border: border ? `2px solid #fff` : 'none',
                    },
                }}
                componentsProps={{
                    badge: {
                        style: { color: theme.palette.text.primary },
                    },
                }}
            >
                {children}
            </StyledBadge>
        </ThemeProvider>
    )
}
