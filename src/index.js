import ReactDOM from 'react-dom/client'
import App from './App'
import './Styles/index.css'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './Theme/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from './translation/i18n'
import { SnackbarProvider } from 'notistack'
import { Zoom } from '@mui/material'
import { themeSnackbar } from './Theme/themeSnackbar'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider
                    maxSnack={5}
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
