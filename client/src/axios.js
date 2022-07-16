import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:8080/api" });

API.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong!')
);

export const fetchBrands = () => API.get('/brands');
export const createBrand = (newBrand) => API.post('/brands', newBrand);
export const deleteBrand = (id) => API.delete(`brands/${id}`);
export const fetchLaptop = () => API.get('/laptops');
export const createLaptop = (newLaptop) => API.post('/laptops', newLaptop);
export const deleteLaptop = (id) => API.delete(`laptops/${id}`);
export const updateLaptop = (id, updatedLaptop) => API.put(`laptops/${id}`, updatedLaptop);

export default API;
