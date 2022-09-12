import './App.css';
import React from 'react';
import NavBar from "./NavBar.js";
import {Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import PopularProducts from './PopularProducts.js';
import Customers from './Customers.js';
import Employees from './Employees.js';
import Tasks from './Tasks.js';



function App() {

  return (
    <div className="navbar">
      {<NavBar/> }
     
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Tasks" element={<Tasks />}/>
        <Route path="/Customers" element={<Customers />}/>
        <Route path="/Employees" element={<Employees />} />
        <Route path="/PopularProducts" element={<PopularProducts />} />

      </Routes>
      </div> 
  );
}


export default App;
