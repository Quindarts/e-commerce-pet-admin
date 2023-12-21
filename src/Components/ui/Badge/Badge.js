import Badge from '@mui/material/Badge'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { styled } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        success: {
            main: '#4fd06b',
        },
    },
})

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        border: `2px solid #fff`,
    },
}))

export function BadgeWrapper({ status, number, children, variant, anchorOrigin }) {
    const badgeContent = number > 99 ? '99+' : number

    return (
        <ThemeProvider theme={theme}>
            <StyledBadge
                color="success"
                badgeContent={badgeContent}
                className={status === 'online' ? 'animate-blink' : ''}
                overlap="circular"
                anchorOrigin={anchorOrigin}
                variant={variant}
                componentsProps={{
                    badge: {
                        style: { color: '#ffffff' },
                    },
                }}
            >
                {children}
            </StyledBadge>
        </ThemeProvider>
    )
}
