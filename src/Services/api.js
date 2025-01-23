import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export default api;
