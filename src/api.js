import axios from 'axios';

export const fetchProduct = productId => {
  return axios.get(`/api/products/${productId}`)
              .then(resp => {
              return  resp.data });
};

export const fetchProductList = () => {
  return axios.get('/api/products')
              .then(resp => {
                return resp.data.products});
};

export const fetchAreas = areaIds => {
  return axios.get(`/api/areas/${areaIds.join(',')}`)
              .then(resp => {
              return  resp.data.areas });
};
