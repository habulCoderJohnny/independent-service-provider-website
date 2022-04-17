import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img height={40} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#go-to-services">CATEGORY</Nav.Link>
                        <Nav.Link href="home#go-to-experts">PROJECTS</Nav.Link>
                        <NavDropdown title="Gallery" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Night Photography</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sky Photography</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Astro Photography by Telescope</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
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