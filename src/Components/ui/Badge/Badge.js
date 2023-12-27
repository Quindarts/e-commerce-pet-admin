import { ThemeProvider } from '@mui/material/styles'
import { createDynamicTheme, StyledBadge } from './style.js'

export function BadgeWrapper({ border, badgeContent, children, variant, anchorOrigin, type, shape, className }) {

    return (
      
            <StyledBadge
                className={className}
                color={type}
                max={999}
                badgeContent={badgeContent}
                overlap="circular"
                anchorOrigin={anchorOrigin}
                variant={variant}
                border={border}
                shape={shape}
            >
                {children}
            </StyledBadge>

    )
}
