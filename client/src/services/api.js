import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3001',
  baseURL: 'http://localhost:5000',
});

export default api;
