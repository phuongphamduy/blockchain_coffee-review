import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:8080/',
});

export default httpRequest;
