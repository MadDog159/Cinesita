import React from "react";
import Search from "./Search"
import {LoginButton} from './Login'
import {LogoutButton} from './Logout'
import {Profile} from './Profile'
import {useAuth0} from '@auth0/auth0-react'
import './Menu.css'

function Menu(props){
    const { isAuthenticated } = useAuth0();
    return(
        <header>  
        <nav class="navbar">
            <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
            <a href="#Experiencia" class="link">Experiencia</a>
            <a href="#SobreMi" class="link">Sobre Mí</a>
            <a href="#Habilidades" class="link">Habilidades</a>
            <a href="#Contactame" class="link">Contactame</a>
            {isAuthenticated ? (
            <>
            <Profile />
            <LogoutButton />
            </>
            ) : (
            <LoginButton />
            )}
            
        </nav>
    </header>
    );
}

export default Menu;