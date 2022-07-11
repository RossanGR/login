import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {autheticated, login} = useContext(AuthContext);

const handlesubmit = (e) => {
  e.preventDefault();
  login(email,password);
}

  return (
    <div className="login-page">
      <div>
        <p>{String(autheticated)}</p>
        <form onSubmit={handlesubmit}>
          <label>Usuário</label>
          <input value={email} type="email" placeholder="email@email.com" onChange={(e)=>setEmail(e.target.value)}/>
          <label>Senha</label>
          <input type="password" value={password} placeholder="*******" onChange={(e)=>setPassword(e.target.value)}/>
          <div className="enter">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;