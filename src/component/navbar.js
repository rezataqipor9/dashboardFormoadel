import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { AiFillAccountBook } from "react-icons/ai";
import { ReactComponent as YourSvg } from "./logo-dash.svg";
import { Link } from 'react-router-dom';
import { SideBarData } from "./sideBarData";
import './Navbar.css'
function Navbar() {
  const [isSidebar, setIsSidebar] = useState(false);
  const showSiideBar = () => {
    setIsSidebar(!isSidebar);
  };
  return (
    <div>
   
          
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          <Link to='./' className="navbar-brand" >
            Navbar
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link to="./" className="nav-link">Home </Link>
            <Link to="./features" className="nav-link">Features </Link>
                
              
            <Link to="./Setting" className="nav-link">Setting </Link>
              <a
                className="nav-link disabled"
                href="#"
               
                aria-disabled="true"
              >
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;
