import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Teste from '../pages/Teste';


// CONTEXTS
import AuthProvider, { AuthContext } from '../contexts/auth';
import { useContext } from 'react';


const RouteApp = () => {

    const Private = ({ children, redirectTo }) => {      
        const { autheticated, loading } = useContext(AuthContext);

        if (loading) {   return <span>Carregando</span> }

        if (!autheticated) {
            return  <Navigate to={redirectTo} />
        }

        return children
    }

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path='/' element={<Private redirectTo='/login'><Home /></Private>} />
                    <Route path='/teste' element={<Teste />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
export default RouteApp;
