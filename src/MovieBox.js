import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Detalles from "./Detalles"
import Profile from "./Profile"
const MovieBox = ({list}) => {
    
    const[modalOpen,setModalOpen]=useState(false)
    
    return (
        <>
        <div onClick={() =>setModalOpen(true)} className="movie-box">
            <div className="overlay">
            <Card style={{ width: '15rem' }}>
                    <Card.Img className="card-img-top" variant="top" src={`https://image.tmdb.org/t/p/w200/${ list && list.poster_path}`} alt={list.title} />
                    <Card.Body>
                        <Card.Title>{list.title}</Card.Title>
                        <Card.Text>Lenguaje Original: {list.original_language}</Card.Text>
                        <Card.Text>Rating: {list.vote_average}</Card.Text>
                    </Card.Body>
            </Card>
            </div><br></br>
            
        </div>
        {modalOpen && <Detalles setModalOpen={setModalOpen} list={list}/>}
        </>
    
    )
}

export default MovieBox