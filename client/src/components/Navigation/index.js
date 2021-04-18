import React from "react";
import "./style.css";
import {Nav, Navbar} from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Google Book Search</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Search Books</Nav.Link>
        <Nav.Link href="/saved">Saved Books</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default Navigation;
