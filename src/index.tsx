import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'App';
import SheetProvider from 'context/SheetProvider';

ReactDOM.render(
  <React.StrictMode>
    <SheetProvider>
      <App />
    </SheetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
