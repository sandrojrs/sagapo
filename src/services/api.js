import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const apiService = {
  get: (url, params) => instance.get(url, { params }),
  post: (url, data) => instance.post(url, data),
  put: (url, data) => instance.put(url, data),
  delete: (url) => instance.delete(url),
};

export default apiService;