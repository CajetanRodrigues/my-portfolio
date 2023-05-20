import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});

theme.typography.h2 = {
  [theme.breakpoints.up('md')]: {
    fontSize: '10rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '5rem',
  }
};

theme.typography.h3 = {
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  }
};

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);