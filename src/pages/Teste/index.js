import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";


const Teste = () => {
  const navigate = useNavigate();
  const {user,setUser,isAutheticated} = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("token");
    console.log("Usuário",user);
    console.log("Auth", isAutheticated);
    setUser(null)
    console.log("Usuário removido",user);
    // navigate("/login");
  };

  return (
    <div>
      <div className="header">TESTE</div>
      <div className="body">
        <button onClick={logout}>Rage quit</button>
      </div>
    </div>
  );
};

export default Teste;