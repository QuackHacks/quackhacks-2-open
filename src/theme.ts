import { createTheme } from '@mui/material/styles';

const THEME = createTheme({
  typography: {
    fontFamily: '"Liebling", ui-sans-serif, system-ui, sans-serif',
    h1: {
      fontFamily: '"Liebling", ui-sans-serif, system-ui, sans-serif',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: '"Liebling", ui-sans-serif, system-ui, sans-serif',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: '"Source Code Variable", ui-monospace, "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: '"Source Code Variable", ui-monospace, "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
    },
    subtitle2: {
      fontFamily: '"Source Code Variable", ui-monospace, "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
    },
  },
  palette: {
    //dark black
    background: {
      default: '#FFFFFF',
    },
    //primary green color: josiah's og: #F5C566
    primary: {
      main: '#276d37',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      //white text
      primary: '#000000ff',
      //grey text
      secondary: '#9c9c9c',
    },
  },
});

export default THEME;
