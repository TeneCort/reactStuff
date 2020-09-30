import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class NavBarComponent extends Component
{
  constructor(){
    super()
    this.state = {
    }
  }

  render(){
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/releases">All releases</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  } 
}

export default NavBarComponent