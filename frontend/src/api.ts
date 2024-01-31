import dotenv from 'dotenv';

dotenv.config();


const BASE_URL = process.env.BACKEND_BASE_URL;

const fetchData = async (endpoint: string, request: RequestInit) => {
    
    const url = `${BASE_URL}/${endpoint}`;

    try {
        const response = await fetch(url, request);

        if (!response.ok) {
            throw new Error('Request failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const fetchTokens = async (email: string, password: string) => {
    const endpoint: string = `/api/login`;
    const request: RequestInit = {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    }
    try {
        return await fetchData(endpoint, request);
    } catch (error) {
        console.error(error);
    }
}



export default fetchData;
