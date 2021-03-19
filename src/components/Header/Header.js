import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
// import logo from '../logo/Grav Rides.png';

const Header = () => {
    return (
        <>
        <Navbar className = 'container mt-3' variant="light">
            <Navbar.Brand href="#home" style ={{fontWeight: 'bold'}}>Grab Rides</Navbar.Brand>
            <Nav className="ml-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#destination">Destination</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            {/* <button>Login</button> */}
            </Nav>
        </Navbar>
        </>
    );
};

export default Header;