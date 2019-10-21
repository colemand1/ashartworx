import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


function NaviBar(){
    return(
        <Navbar collapseOnSelect expand="md" className='my-navbar'>
			  <Navbar.Brand>	
			  	<LinkContainer to='/'>
                    <NavItem className='my-tab'>Ash Art</NavItem>
                </LinkContainer>
			  </Navbar.Brand>
			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav">
			    <Nav className="mr-auto">
                    <LinkContainer to="/gallery">
                        <Nav.Item className='my-tab'>Gallery</Nav.Item>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Item className='my-tab'>About</Nav.Item>
                    </LinkContainer>
			     
			    </Nav>
			  </Navbar.Collapse>

            </Navbar>
    );
}

export default NaviBar;