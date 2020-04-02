import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect bg="primary" variant="dark">
                <Navbar.Brand href="">CodeLife</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link eventKey={1} as={Link} href="/" to="/">Home</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} href="/about" to="/about">About</Nav.Link>
                        <Nav.Link eventKey={3} as={Link} href="/news" to="/news">News</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
