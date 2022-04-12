import React from "react";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header (props) { 
    return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand>Service Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="services-list">Services</Link>
            </Nav.Link>
            <Nav.Link>
              {props.user ? (
                <a onClick={props.logout}>Logout User</a>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
)};
export default Header