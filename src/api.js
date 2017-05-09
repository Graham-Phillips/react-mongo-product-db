import axios from 'axios';

export const fetchProduct = productId => {
  console.log("fetchProduct");
  return axios.get(`/api/products/${productId}`)
              .then(resp => resp.data);
};

export const fetchProductList = () => {
  return axios.get('/api/products')
              .then(resp => resp.data.products);
};
