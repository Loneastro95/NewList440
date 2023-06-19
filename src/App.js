import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login"
import Registration from "./components/Registration";
import Home from "./components/Home";
import data from "./mock-data.json";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={ <Login/> }/>
        <Route path="registration" element={ <Registration/> }/>
        <Route path="home" element={ <Home/> }/>
      </Routes>

   
  );
}

export default App;
