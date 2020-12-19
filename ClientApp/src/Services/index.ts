
import axios from 'axios';

axios.interceptors.response.use(response => response, error => Promise.reject(error));

const http = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 60000,
    timeoutErrorMessage: 'No hay conexión con los recursos',
    headers: {
        common: {
            Accept: 'application/json',
        }
    }
});

export default http;