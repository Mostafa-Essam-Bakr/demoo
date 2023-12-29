import SignUp from "./Components/Sign up"
import Login from "./Components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';


import "./Components/Home.css"
import {  Routes,BrowserRouter, Route } from "react-router-dom";
import Dashbord from "./Dashbord"
import Home from "./Home"
import Users from "./Components/Users"
import Updateuser from "./Updateuser"
import Create from "./Create"
import Setings from "./Setings"
import Book from "./Book"
import Hotel from "./Hotel";
function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<Home/>}/>
      <Route path="/Register" element={<SignUp/>}/>
    
      <Route path="/Login" element={<Login/>}/>
    
    
    
    
    
    
    
    
    
      <Route path="/Dashbord" element={<Dashbord/>}>
    <Route path="Users" element={<Users/>}/>
    <Route path="Create" element={<Create/>}/>
    <Route path="Setings" element={<Setings/>}/>
    <Route path="Users/:id" element={<Updateuser/>}/>
     </Route>
    
    
      <Route path="Hotel" element={<Hotel/>}/>
    
    
    
      <Route path="/Book" element={<Book/>}/>
    
    
    
    
    
    
    
    
    
    
    
    </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
