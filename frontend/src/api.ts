//import dotenv from 'dotenv';

import { SearchParams } from "pages/FindATutor";

//dotenv.config();


const BASE_URL = "http://127.0.0.1:8000/" //process.env.BACKEND_BASE_URL;

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


export const login = async (email: string, password: string) => {
    const endpoint: string = `api/login`;
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
        throw error;
    }
}

export const tutorSearch = async (searchParams: SearchParams) => {
    const endpoint: string = `api/all-tutors`;
    const request: RequestInit = {
        method: 'POST',
        body: JSON.stringify(searchParams),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    }
    try {
        return await fetchData(endpoint, request);
    } catch (error) {
        throw error;
    }
  };