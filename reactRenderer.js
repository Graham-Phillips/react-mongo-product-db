import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = productId => {
  if (productId) {
    return `${config.serverUrl}/api/products/${productId}`;
  }
  return `${config.serverUrl}/api/products`;
};

const getInitialData = (productId, apiData) => {
  if (productId) {
    return {
      currentProductId: apiData.id,
      products: {
        [apiData.id]: apiData
      }
    };
  }
  return {
    products: apiData.products
  };
};

const serverRender = (productId) =>
  axios.get(getApiUrl(productId))
    .then(resp => {
      const initialData = getInitialData(productId, resp.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={resp.data} />
        ),
        initialData
      };
    });

export default serverRender;
