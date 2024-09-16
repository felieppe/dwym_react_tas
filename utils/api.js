import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com"

async function fetchUsers() {
    const endpoint = `${BASE_URL}/users`;

    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch(error) {
        console.error(error);
        return [];
    }
}

export { fetchUsers };