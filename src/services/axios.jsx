import axios from 'axios';

const DataService = axios.create({
  // This will result in: http://localhost/MAP25_Sem7/api/
  baseURL: import.meta.env.VITE_API_URL + '/api/', 
  timeout: 30000,
  headers: {
    'Accept': 'application/json',
  },
});

DataService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default DataService;