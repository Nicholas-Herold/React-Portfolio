import React from "react";
import Navi from './Navigation';
import {Navbar,Container} from 'react-bootstrap';



const Header = () =>{

    return(
        
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navi/>
        </Container>
      </Navbar>

  
    )
}

export default Header;