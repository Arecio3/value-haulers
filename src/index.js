import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App';
import GlobalStyle from './styles/GlobalStyle'

ReactDOM.render(
  <Suspense fallback={(<div>Loading</div>)}>
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
