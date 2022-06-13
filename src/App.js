import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./components/Products/Products";


function App() {
  
  return <div className="App">
    {/* code here */}
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      <Route path="/login" element={<Login/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>

 
  </div>;
}

export default App;
