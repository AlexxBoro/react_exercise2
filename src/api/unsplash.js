import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b7171ab9d28229c9193b9035dbaf718cbf0f9f6b8c1065c5fd01788f01c8e82f'
    }
});