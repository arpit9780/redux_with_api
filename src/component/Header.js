import React, { useEffect } from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


function NavbarLog() {

  return (<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className='container'>
  <a class="navbar-brand font-weight-bold" href="#">YUVASOFT</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">

      <li class="nav-item">
      <Link to="/signup" className="Navhome nav-link">SIGN UP</Link>
      </li>
      <li class="nav-item">
      <Link to="/login" className="Navhome nav-link">LOG IN</Link>
      </li>
      <li class="nav-item">
      <Link to="/dashboard" className="Navhome nav-link">DASHBOARD</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
    {/* <Navbar bg="primary" variant="dark ">
      <Container>
        <Navbar.Brand className="font-weight-bold">YUVASOFT</Navbar.Brand>
        <Nav className="mx-auto ">
          {!auth ? <>
           <Link to="/signup" className="Navhome nav-link">SIGN UP</Link>
          <Link to="/login" className="Navhome nav-link">LOG IN</Link>
          </>
        :
        <Link to="/dashboard" className="Navhome nav-link">DASHBOARD</Link>
        
        }
         
        </Nav>
      </Container>
    </Navbar> */}
  </>
  )
}
export default NavbarLog;
