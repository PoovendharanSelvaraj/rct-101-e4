import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./components/Products/Products";
import { useSelector } from "react-redux";


function App() {
  const {isAuthenticated}=useSelector(state=>state.auth.data)
  return <div className="App">
    {/* code here */}
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      {isAuthenticated?
      <Route path="/products" element={<Products/>}/>: null}
      <Route path="/login" element={<Login/>}/>
    </Routes>

 
  </div>;
}

export default App;
