import React from 'react';
import {NavLink} from 'react-router-dom';

const styles = {
    display: "inline-block",
    
    width: "60px",
    padding: "35px",
    margin: "17px 16px 16px",
    textDecoration: "none",
    color: "black",
    
    // margin: "0",
    // padding: "0",
    // width: "180px",
    // color: "#f1f1f1",
  };
  function NavBar(){
    return (
      
        <div className = "bar" >
          
          <h1 className= "name"><b>Sales Tracker</b></h1>
              <nav className= "elements">
      
            <NavLink to = "./" exact = "true"
            style={styles}
            activeclassname={{
                background: "darkblue",
              }}
            > Home 
            </NavLink>
            <NavLink to = "/Tasks" exact ="true"
            style={styles} 
            activeclassname={{
                background: "darkblue",
              }}
           > Tasks
             </NavLink>
             <NavLink 
             to = "/Customers" exact ="true"
            style={styles}
            activeclassname={{
                background: "darkblue",
              }} 
            > Customers 
            </NavLink>
            <NavLink
             to = "/Employees" exact = "true"
            style={styles} 
            
            activeclassname={{
                background: "darkblue",
              }}
            > Employees
            </NavLink>
            <NavLink to = "/PopularProducts" exact ="true"
            style={styles}
            activeclassname={{
                background: "darkblue",
              }} 
            > Popular </NavLink>
            </nav>
        </div>
        
    )
}

export default NavBar;

