import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    Authorization: 'Bearer SUA_API_KEY'
  }
});

export default api;
