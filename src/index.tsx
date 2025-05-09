import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {GlobalStyles} from "@mui/system";

const globalStyles = (
    <GlobalStyles
        styles={{
            '@font-face': [
                {
                    fontFamily: 'Grith',
                    src: `url(${process.env.PUBLIC_URL + '/fonts/grith/Grith-gw3z1.otf'}) format('opentype')`,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                },
            ],
        }}
    />
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = createTheme({
    palette: {
        text: {
            primary: '#ffffff',  // Default text color
            secondary: 'lightgray', // Optional for secondary text
        },
    },
});
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          {globalStyles}
          <App />
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
