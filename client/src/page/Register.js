import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Register = () => {
  let { registerUser } = useContext(AuthContext);
  let [password,setPassword]=useState(null)
  let [confirmPassword,setConfirmPassword]=useState(null)
  let [user,setUser]=useState(null)
  let [email,setEmail]=useState(null)
  let isValid = ()=>{return user && (password===confirmPassword) && email}

 
  return (
    <div className={"container"}>
      <h1>Register page</h1>
      <form onSubmit={registerUser}>
        <input type="text" name="username" placeholder="Enter username" value={user} onChange={(e)=>setUser(e.target.value)}></input>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        ></input>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter confirm password"
          value={confirmPassword}
          onChange={(e)=>{setConfirmPassword(e.target.value)}}
        ></input>
        <input type="email" name="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <input type="submit" disabled={!isValid()}></input>
      </form>
      {/* <p>pass : {password}</p>
      <p>con pass : {confirmPassword}</p> */}
    </div>
    
  );
};

export default Register;
