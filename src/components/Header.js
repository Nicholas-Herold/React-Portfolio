import React from "react";

import {Nav,Navbar,Container} from 'react-bootstrap';



function Header (props) {

    return(
        
    //   <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">NH Portfolio</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link
    //           onClick = {() => props.changePage('About')} 
    //           href="About"
    //           >About Me
    //         </Nav.Link>
    //         <Nav.Link 
    //            onClick = {() => props.changePage('Projects')}
    //            href="Projects">Projects
    //         </Nav.Link>
    //         <Nav.Link 
    //           onClick = {() => props.changePage('Contacts')}
    //           href="Contacts">Contacts
    //         </Nav.Link>
    //         <Nav.Link 
    //           onClick = {() => props.changePage('Resume')}
    //           href="Resume">Resume
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
<ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.changePage('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={props.changeView === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.changePage('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={props.changeView === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => props.changePage('Blog')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={props.changeView === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.changePage('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={props.changeView === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  
    )
}

export default Header;