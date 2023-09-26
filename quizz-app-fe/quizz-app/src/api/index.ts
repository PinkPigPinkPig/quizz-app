/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const BASE_URL = 'http://localhost:5037/'

export const END_POINT = {
    PARTICIPANT: 'Participant',
    QUESTION: 'Question',
}

export const createApiEndPoint = (endpoint: string) => {
    const url = BASE_URL + 'api/' + endpoint;

    return {
        fetch: () => axios.get(url),
        fetchById: (id: number) => axios.get(url + `/${id}`),
        post: (newRecord: any) => axios.post(url, newRecord),
        put: (id: number, updateRecord: any) => axios.put(url + `/${id}`, updateRecord),
        delete: (id: number) => axios.delete(url + `/${id}`)
    }
}