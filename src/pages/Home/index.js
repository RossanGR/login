import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";


const Home = () => {

  const {logout} = useContext(AuthContext);


  return (
    <div>
      <div className="header">Home</div>
      <p>Bem vindo a HOME</p>
      <div className="body">
        <button onClick={logout}>Sair</button>
      </div>
    </div>
  );
};

export default Home;