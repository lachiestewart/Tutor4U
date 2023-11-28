import axios, {AxiosResponse} from "axios";

const BACKEND_URL:string = import.meta.env.VITE_BACKEND_URL;

if (BACKEND_URL != null && BACKEND_URL != "backend_address") {
    console.log("Loaded " + BACKEND_URL + " from .env");
} else {
    console.log("Couldn't find FRONTEND_URL in .env or FRONTEND_URL has not been changed from default value 'frontend_address'");
}

export const tutor4UApi = axios.create({
    baseURL: BACKEND_URL,
    timeout: 15000,
});


export const apiRequest = async <T>(end_point:string): Promise<T> => {
    const response: AxiosResponse<T> = await tutor4UApi.get(end_point);
    return response.data;
}

