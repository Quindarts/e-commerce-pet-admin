import ReactDOM from 'react-dom/client'
import App from './App'
import './Styles/index.css'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './Theme/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from './translation/i18n'
import { SnackbarProvider } from 'notistack'
import { StyledMaterialDesignContent } from './Components/ui/Snackbar/style'
import CustomVariantSnackbar from './Components/ui/Snackbar/Snackbar'
import { Zoom } from '@mui/material'

const root = ReactDOM.createRoot(document.getElementById('root'))
const themeSnackbar = {
    customVariant: CustomVariantSnackbar,
    warning: StyledMaterialDesignContent,
    info: StyledMaterialDesignContent,
    success: StyledMaterialDesignContent,
    error: StyledMaterialDesignContent,
}
root.render(
    <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider
                    TransitionComponent={Zoom}
                    Components={themeSnackbar}
                    autoHideDuration={3000}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                    <App />
                </SnackbarProvider>
            </ThemeProvider>
        </I18nextProvider>
    </ThemeProvider>,
)
