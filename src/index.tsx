import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import './theme/global.css'

function App() {
  const engine = new Styletron();

  return (
      <StyletronProvider value={engine}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
                <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </StyletronProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
