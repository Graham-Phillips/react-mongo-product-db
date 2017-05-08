// entry point to the client side app

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App initialData={window.initialData.products} />,
  document.getElementById('products')
);
