import React from "react";
import Search from "./Search"
import {LoginButton} from './Login'
import {LogoutButton} from './Logout'
import {Profile} from './Profile'
import {useAuth0} from '@auth0/auth0-react'
import { Navbar, Nav } from "react-bootstrap"
import {useState} from "react"
import './Menu.css'

function Menu(props){
    const { isAuthenticated } = useAuth0();
    const [modalOpen, setModalOpen] = useState(false);
    return(

        <>
            <Navbar className="menu" expand="lg">
                    <Navbar.Brand href="/">Cinesita</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        

                            {isAuthenticated ? (
                            <>
                                
                                
                                <Nav.Link href='/listaPeliculas'>Lista de Peliculas</Nav.Link>
                                
                            </>
                        ) : (
                            <LoginButton />
                        )}
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            <header className="menu">
                    <nav class="navbar">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Search.." name="search"></input>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                        <a to='/' className="link">Inicio</a>
                        

                    </nav>
                    {isAuthenticated &&(
                    <svg onClick={() => setModalOpen(true)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>)}

                
                {modalOpen && <Profile setOpenModal={setModalOpen}/>}
            </header>
            
            
        </>
    );
}

export default Menu;