import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import "../App.css"


function NavbarLog() {
  const [sta,setSta] = useState(false)
  let user = JSON.parse(localStorage.getItem("user"))

  useEffect(()=>{
  if(sta){
    setSta(false)
  }else{
    setSta(true)
  }
  },[])
  
 return (<>
        <Navbar bg="primary" variant="dark ">
        <Container>
        <Navbar.Brand href="/">LoginSignup</Navbar.Brand>
        {/* <NavLink to="/" className="Navhome homePage ">LoginSignup</NavLink> */}
          <Nav className="mx-auto ">
         
            <NavLink to="/signup" className="Navhome nav-link">SIGN UP</NavLink>
            {user!== null ? <NavLink to="/dashboard" className="Navhome nav-link">DASHBOARD</NavLink>:   <NavLink to="/login" className="Navhome nav-link">LOG IN</NavLink>}
          </Nav>
        </Container>
      </Navbar>
      </>
    )}
export default NavbarLog;
