import ReactDOM from 'react-dom/client'
import App from './App'
import './Styles/index.css'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './Theme/theme'
import { SnackbarProvider } from 'notistack'
import { StyledMaterialDesignContent } from './Components/ui/Toast/style'
import Toast from './Components/ui/Toast/Snackbar'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <SnackbarProvider
                delay={100}
                maxSnack={5}
                autoHideDuration={1000}
                iconVariant={{
                    success: '✅',
                    error: '✖️',
                    warning: '⚠️',
                    info: 'ℹ️',
                }}
                Components={{ success: StyledMaterialDesignContent, toast: Toast }}
            >
                <App />
            </SnackbarProvider>
        </ThemeProvider>
    </BrowserRouter>,
)
