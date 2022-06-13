import React, { useState } from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../store/auth/auth.actions";

const Login = () => {
   const dispatch = useDispatch();
   const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const navigate=useNavigate();
  const {isAuthenticated,loading,error} = useSelector(state=>state.auth.data)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  console.log(isAuthenticated)
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(loginAPI(loginCreds))
  
  }


  useEffect(()=>{
    if(isAuthenticated){
      navigate("/products")
    }
  },[navigate,isAuthenticated])
  if(loading){
    return "Loading";
  }
  if(error){
    return "error";
  }
  return (
    <div>
      <form   onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }} >
        <input data-cy="login-email" name="email" value={loginCreds.email}  onChange={handleChange} placeholder="Enter your email"/>
        <input data-cy="login-password" name="password" value={loginCreds.password}  onChange={handleChange} placeholder="Enter password" />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
