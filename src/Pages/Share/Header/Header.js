import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img className='rounded w-100' height={40} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#go-to-services">CATEGORY</Nav.Link>
                        <Nav.Link href="home#go-to-experts">PROJECTS</Nav.Link>
                        <NavDropdown title="GALLERY" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/night-photography">Night Photography</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sky Photography</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Astro Photography by Telescope</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="home#go-to-experts">WORKSHOP</Nav.Link>
                        <Nav.Link as={Link} to="/tutorial">TUTORIALS</Nav.Link>
                        <Nav.Link href="home#go-to-blog">BLOGS</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">ABOUT ME</Nav.Link>
                        <Nav.Link as={Link} to="/login">
                            LOGIN
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;