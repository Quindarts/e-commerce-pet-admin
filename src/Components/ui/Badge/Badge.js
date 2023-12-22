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
                    success: {
                        main: COLOR.green,
                    },
                    text: {
                        primary: COLOR.white,
                    },
                },
            })
            break
        case 'info':
            theme = createTheme({
                palette: {
                    info: {
                        main: COLOR.badge_blue,
                    },
                    text: {
                        primary: COLOR.white,
                    },
                },
            })
            break
        case 'error':
            theme = createTheme({
                palette: {
                    error: {
                        main: COLOR.red,
                    },
                    text: {
                        primary: COLOR.white,
                    },
                },
            })
            break
        case 'warning':
            theme = createTheme({
                palette: {
                    warning: {
                        main: COLOR.gray_light,
                    },
                    text: {
                        primary: COLOR.red,
                    },
                },
            })
            break
        case 'seccondary':
            theme = createTheme({
                palette: {
                    seccondary: {
                        main: COLOR.gray_light,
                    },
                    text: {
                        primary: COLOR.gray_dark,
                    },
                },
            })
            break
        case 'primary':
            theme = createTheme({
                palette: {
                    success: {
                        main: COLOR.red,
                    },
                    text: {
                        primary: COLOR.white,
                    },
                },
            })
            break
        case 'custom':
            theme = createTheme({
                palette: {
                    custom: {
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
const StyledBadgeRound = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        borderRadius: '50%',
        border: `2px solid #fff`,
        maxWidth: '150px',
    },
}))

const StyledBadgeSquare = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        borderRadius: '4px',
        border: `2px solid #fff`,
        maxWidth: '150px',
    },
}))

export function BadgeWrapper({ status, number, children, variant, anchorOrigin, type, shape }) {
    const badgeContent = typeof number !== 'undefined' ? (number > 99 ? '99+' : number) : 'Hello, world!'
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
                badgeContent={badgeContent}
                style={{
                    fontSize: '1px',
                }}
                overlap="circular"
                anchorOrigin={anchorOrigin}
                variant={variant}
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
