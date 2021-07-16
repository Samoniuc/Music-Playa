import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";

class Genres extends Component {

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Playa</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Song Library" id="collasible-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink to="/songs" style = {{color:"black"}}>
                                            All songs
                                        </NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink to="/artists" style = {{color:"black"}}>
                                            Artists
                                        </NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink to="/albums" style = {{color:"black"}}>
                                            Albums
                                        </NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink to="/genres" style = {{color:"black"}}>
                                            Genres
                                        </NavLink>
                                    </NavDropdown.Item>   
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#login">Log in</Nav.Link>
                            <Nav.Link eventKey={2} href="#signup">
                            Sign up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container" style={{paddingTop:"21vh"}}>
                    <p class="text-center">
                        <p class="fs-2">
                            This is the genres page!
                        </p>
                    </p>
                </div>
            </>
        );
    }

}

export default Genres;