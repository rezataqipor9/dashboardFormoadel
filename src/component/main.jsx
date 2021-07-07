import React from "react";
import { ReactComponent as YourSvg } from "./logo-dash.svg";
import "./style.css";
import {Link} from 'react-router-dom'
const Main = () => {
  return (
    <>
     
      <div className="containers">
        <div className="side-bar ">
          <div className="logo-container">
            {" "}
            <YourSvg className="logo-svg" />{" "}
          </div>
          <div class="list-group">
            <nav class="nav flex-column">

             
            </nav>
          </div>
        
        </div>
        <div className="content-wrapper">
          Lorem ipsum dolor sit amet consectetur.
        </div>
      </div>
    </>
  );
};

export default Main;
