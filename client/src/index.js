import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Songs from "./Songs";
import Artists from "./Artists";
import Albums from "./Albums";
import Genres from "./Genres";
import SearchBar from "./SearchBar";
import "./style.css"

// const posts = [
//     { id: '1', name: 'This first post is about React' },
//     { id: '2', name: 'This next post is about Preact' },
//     { id: '3', name: 'We have yet another React post!' },
//     { id: '4', name: 'This is the fourth and final post' },
// ];

// const { search } = window.location;
// const query = new URLSearchParams(search)
// for (let p of query) {
//     console.log(p);
// }

function App() {
    return(
        <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <NavLink className="brand" to="/">Playa</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Song Library" id="collasible-nav-dropdown">
                            <div className="d-grid gap-2">    
                                <NavLink className="navlink" to="/songs">
                                    All songs
                                </NavLink>
                            
                                <NavLink className="navlink" to="/artists">
                                    Artists
                                </NavLink>
                            
                                <NavLink className="navlink" to="/albums">
                                    Albums
                                </NavLink>
                        
                                <NavLink className="navlink" to="/genres">
                                    Genres
                                </NavLink>
                            </div>      
                        </NavDropdown>
                        <Switch>
                            <Route path="/songs" component={SearchBar} />
                            <Route path="/artists" component={SearchBar} />
                            <Route path="/albums" component={SearchBar} />
                            <Route path="/genres" component={SearchBar} />
                        </Switch>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#login">Log in</Nav.Link>
                        <Nav.Link eventKey={2} href="#signup">
                            Sign up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/songs" component={Songs} />
                <Route path="/artists" component={Artists} />
                <Route path="/albums" component={Albums} />
                <Route path="/genres" component={Genres} />
            </Switch>
            {/* <div>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.name}</li>
                    ))}
                </ul>
            </div> */}
        </Router>
    
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));
