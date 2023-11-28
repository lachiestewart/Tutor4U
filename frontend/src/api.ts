import axios, { AxiosResponse } from "axios"; 
import { Tutor, Student } from "./interfaces";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const getTutors = () => instance.get<Tutor[]>("tutor/").then(responseBody);
