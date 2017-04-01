import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('products')
);


setTimeout(()=>{
  ReactDOM.render(
    <h2>arse</h2>,
    document.getElementById('products')
  );
}, 4000);
