import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8000'
})

export const createLoggin = async (email, senha) =>{
    return api.post('/login', {email,senha});
}

export const getUser = async () =>{
    return api.get('/users');
}