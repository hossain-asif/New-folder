


import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ValidationHelper from '../utility/ValidationHelper';
import logo from  "../assets/images/logo.svg"




const AppNavBar = () => {

  const logout = ()=>{
    sessionStorage.clear();
    window.location.href='/';
  }


    return (
<Navbar expand="lg" className="bg-body-tertiary bg-white shadow-lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img className='nav-logo' src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }} navbarScroll>
            <NavLink className="nav-link" to="/">Home</NavLink>
            {
              ValidationHelper.isLogin() && 
              <NavLink className="nav-link" to="/cart-list">Cart List</NavLink>
            }
          
            
            
          </Nav>


          {
            ValidationHelper.isLogin()?(    <Button onClick={logout} className='btn btn-danger'>Logout</Button>):(<Link className='btn btn-danger' to='/login'> Login</Link>)
          }



      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default AppNavBar;