import axios from 'axios';

export const fetchProduct = productId => {
  console.log("fetchProduct");
  return axios.get(`/api/products/${productId}`)
              .then(resp => resp.data);
};
