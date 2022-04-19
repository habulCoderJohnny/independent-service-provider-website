import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import Loading from '../Loading/Loading';

const Header = () => {

    //1st for condition log/signup menu in navbar 
    const [user,loading] = useAuthState(auth);
    // 3rd btn click to user signout hoye jabe
    const handleSignout = () => {
        signOut(auth)
    }

    // if (loading) {
    //     return <Loading></Loading>
    // }

    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark" className='col-sm-12'>
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img className='rounded w-100' height={40} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/home">Astronomy of the Day</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#go-project">PROJECTS</Nav.Link>
                        <NavDropdown title="GALLERY" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/night-photography">Night Photography</NavDropdown.Item>
                            <NavDropdown.Item href="#">Sky Photography</NavDropdown.Item>
                            <NavDropdown.Item href="#">Astro Photography by Telescope</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/workshop">WORKSHOP</Nav.Link>
                        <Nav.Link as={Link} to="/tutorial">TUTORIALS</Nav.Link>
                        <Nav.Link as={Link} to="/blog">BLOGS</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">ABOUT ME</Nav.Link>
                        {/*//1st for condition log/signup menu in navbar*/}
                        {user ? <button className="btn btn-link text-white text-decoration-none" onClick={handleSignout}>SIGNOUT</button>
                            :
                            <Nav.Link as={Link} to="/login">
                                LOGIN
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;