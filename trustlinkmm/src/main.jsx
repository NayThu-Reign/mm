import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles } from "@mui/material"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AuthProvider from './providers/AuthProvider.jsx';
import UIStateProvider from './providers/UIStateProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalStyles styles={{ body: { overflowX: "hidden" } }} />
    <UIStateProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </UIStateProvider>
  </React.StrictMode>,
)
