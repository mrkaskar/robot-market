import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'App';
import SheetProvider from 'context/SheetProvider';

ReactDOM.render(

  <SheetProvider>
    <App />
  </SheetProvider>,
  document.getElementById('root'),
);
