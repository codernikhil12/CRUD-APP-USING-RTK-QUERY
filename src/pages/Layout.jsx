import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';


const Layout = () => {
    const myDesign = {
        marginLeft: "8px",
        fontSize: "18px",
        textDecoration: "none",
        color: "red",
        fontWeight: "bold"
    }
  return (
    <>

    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={myDesign} to= "postForm">Home</Link>
            <Link style={myDesign} to="userList">UserList</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default Layout;
