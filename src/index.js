import ReactDOM from 'react-dom/client'
import App from './App'
import './Styles/index.css'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './Theme/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from './translation/i18n'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </I18nextProvider>
    </BrowserRouter>,
)
