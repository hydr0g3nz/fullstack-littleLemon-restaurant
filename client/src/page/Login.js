
import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import {Link, Navigate } from "react-router-dom"

function Login({className}) {
  let {loginUser}=useContext(AuthContext)
  let {user}=useContext(AuthContext)
  return (!user ?
    (<div className={'container'}>
        <h1>
            Login page
        </h1>
        <form onSubmit={loginUser}>
          <input type="text" name="username" placeholder="Enter username"></input>
          <input type="password" name="password" placeholder="Enter password"></input>
          <input type="submit"></input>
        </form>
        
        <Link to='/register'>Register</Link>
    </div>)
    :
    (<Navigate to = "/"></Navigate>)
  );
}

export default Login;
