import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";
import { LogoutButton } from "./Logout";
import './Profile.css'


export const Profile = ({ setOpenModal }) => {

    const{user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading){
        return <div>Loading...</div>
    }
    

    return(
        isAuthenticated &&(
            <div className="modalBackground">
                
                <div className="modalContainer">
                    <div className="float-right">
                        <div className="close">
                            <button onClick={()=>setOpenModal(false)} className="button">X</button>
                        </div>
                        <Card style={{ width: '15rem' }}>
                        
                            <Card.Img variant="top" src={user.picture} alt={user.name} />
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>{user.email}</Card.Text>
                                <LogoutButton />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            
        )
    )
}