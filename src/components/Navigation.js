import React from "react";
import {Navbar,Nav} from 'react-bootstrap';

const Navi = props =>{
    

    return(
       <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </div>
    )
}

export default Navi;