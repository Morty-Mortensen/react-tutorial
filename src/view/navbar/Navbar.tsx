import React from 'react';
import './Navbar.css';
import logo from '../../logo.svg';
import {Button} from "@mui/material";

 const Navbar = () => {
  return (
      <div className="navbar-container">
          <div className="navbar-left-container">
              <img src={logo} className="navbar-logo" alt="logo" />
              <Button variant="text" style={{marginRight: '20px', color: "black"}}>Find jobs</Button>
              <Button variant="text" style={{marginRight: '20px', color: "black"}}>Company reviews</Button>
              <Button variant="text" style={{marginRight: '20px', color: "black"}}>Find salaries</Button>
          </div>
          <div className="navbar-right-container">
            <Button variant="text" style={{marginRight: '20px', color: "black"}}>Upload your resume</Button>
            <Button variant="text" style={{marginRight: '20px', color: "black"}}><a style={{textDecoration: 'none', color: "blue", fontWeight: "bold"}} href="https://www.google.com">Sign in</a></Button>
              <div style={{height: "50%", borderLeft: "solid lightgray 2px", marginRight: '20px'}}/>
            <Button variant="text" style={{marginRight: '20px', color: "black"}}>Employers / Post Job</Button>
          </div>
      </div>
  );
}

export default Navbar;
