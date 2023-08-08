import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// import { theme } from './config/theme';
import { theme } from './config/theme';
import { BrowserRouter } from 'react-router-dom';
import './fonts/stylesheet.css';
import App from './App.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App/>
      <CssBaseline/>
    </ThemeProvider>
    </BrowserRouter>
)
