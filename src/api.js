import axios from 'axios';

export const fetchProduct = productId => {
  return axios.get(`/api/products/${productId}`)
    .then(resp => resp.data);
}
