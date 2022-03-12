import React from "react";
import Search from "./Search"
import {LoginButton} from './Login'
import {LogoutButton} from './Logout'
import {Profile} from './Profile'
import {useAuth0} from '@auth0/auth0-react'
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"

function Menu(props){
    const { isAuthenticated } = useAuth0();

    return(
        <><Navbar expand="lg">
                <Navbar.Brand href="/">Cinesita</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {isAuthenticated ? (
                        <>
                            <Nav.Link href='/listaPeliculas'>Lista de Peliculas</Nav.Link>
                            <Profile />
                        </>
                    ) : (
                        <LoginButton />
                    )}
                    </Nav>
                </Navbar.Collapse>
        </Navbar><header>
                <nav class="navbar">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search"></input>
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                    <a to='/' class="link">Inicio</a>
                    

                </nav>
            </header></>
    );
}

export default Menu;