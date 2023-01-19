import { CssBaseline, ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './global.css';

const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(127,122,238,1)',
      light: 'rgba(155,151,248,1)',
      dark: 'rgba(135,133,179,1)',
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
