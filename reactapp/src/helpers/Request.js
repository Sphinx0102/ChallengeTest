import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5132/api', // La URL base de tus endpoints
    timeout: 5000, // Opcional: tiempo máximo de espera para la respuesta en milisegundos
    headers: { 'Authorization': 'Bearer token' } // Opcional: cabeceras personalizadas
});

export default instance;