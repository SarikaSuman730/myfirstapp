import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,

    headers: {
        'Content-Type': 'application/json',
    },
});

export const getUsers = async () => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        console.log('Users API Error:', error);
        throw error;
    }
};