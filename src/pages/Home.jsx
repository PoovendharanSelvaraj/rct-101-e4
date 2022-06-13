import React from "react";
import { useSelector } from "react-redux";
import Products from "../components/Products/Products";
import Login from "./Login";

const Home = () => {
  const {isAuthenticated} = useSelector(state=>state.auth.data);
  return <div>{/* code here */}
   {isAuthenticated?<Products/>:<Login/>}
  </div>;
};

export default Home;
