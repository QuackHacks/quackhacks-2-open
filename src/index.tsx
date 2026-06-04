import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';
import App from './App';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import THEME from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
