import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api, createLoggin } from "../services/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
  
    useEffect(()=>{
        // Está recuperando o valor existente no armazenamento local.
        const recoveredUser = localStorage.getItem('user');
        // Se tiver algum usuário já no armazenamento local, ele vai setar esse usuário no state User .
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));            
        }
        // Serve para controlar o carregamento do userEffect.
        setLoading(false)        
    },[])

    const login = async (email,password) =>{
        
        const response = await createLoggin(email,password);
        console.log("Login Auth", response.data.user)
        
        const loggedUser = response.data.user;
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        api.defaults.headers.Authorization =  `Bearer ${token}`;

        console.log(user);        
       
            setUser(loggedUser);
            navigate('/');        
    }

    const logout = () =>{
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
        api.defaults.header.Authorization = null;
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{ autheticated: !!user, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;