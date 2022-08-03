import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://serene-bayou-24301.herokuapp.com/api',
});

export default axiosInstance;
