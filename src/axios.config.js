import axios from 'axios'

const defaultOptions = {
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '6fa43236-220c-460a-8473-42e2347932fb',
  }
};

let axiosInstance = axios.create(defaultOptions);

export default axiosInstance;