import React from "react";
import './CardLogin.css';

export default props => {

  return (
    <div className="containner">
      <h1 className="card">Entrar</h1>
      <h2 className="card">Digite seus dados para entrar</h2>
      <p>Email</p>
      <input className="input" type='email' name='email'></input>
      <p>Senha</p>
      <input className="input" type='password' name='password'></input>
      <button className="btn">Logar</button>
      <button className="googlebtn">Logar com google</button>
    </div>
  )
}