/** Serverside rendering of client side React UI
*   Fetches data from the api
**/

import config from './config';
import axios from 'axios';

axios.get(`${config.serverUrl}/api/products`)
  .then(resp => {
    console.log(resp.data);
  });
