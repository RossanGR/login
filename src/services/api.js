import axios from "axios";

export const api = axios.create({
    baseUrl: 'http://localhost:8000/'
})

export const createLoggin = async (email, password) =>{
    return api.post('/auth/login', {email,password});
}

export const getUser = async () =>{
    return api.get('/users');
}