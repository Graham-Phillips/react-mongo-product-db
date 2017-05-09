import axios from 'axios';

export const fetchProduct = productId => {
  console.log("fetchProduct");
  return axios.get(`/api/products/${productId}`)
              .then(resp => resp.data);
};

export const fetchProductList = () => {
  return axios.get('/api/products')
              .then(resp => {
                console.log("fetchProductList resp.data:" + JSON.stringify(resp.data));
                console.log("fetchProductList resp.data.products:" + JSON.stringify(resp.data.products));
                return resp.data.products});
};
