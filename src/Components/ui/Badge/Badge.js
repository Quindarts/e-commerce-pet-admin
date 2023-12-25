import { ThemeProvider } from '@mui/material/styles'
import { createDynamicTheme, getStyledBadge } from './style.js';

export function BadgeWrapper({ border, badgeContent, children, variant, anchorOrigin, type, shape }) {
    const theme = createDynamicTheme(type);
    const StyledBadge = getStyledBadge(shape);

    return (
        <ThemeProvider theme={theme}>
            <StyledBadge
                color={type}
                max={999}
                badgeContent={badgeContent}
                overlap="circular"
                anchorOrigin={anchorOrigin}
                variant={variant}
                border={border}
            >
                {children}
            </StyledBadge>
        </ThemeProvider>
    );
}