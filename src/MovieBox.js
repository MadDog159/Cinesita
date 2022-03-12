import React from 'react';
import { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { Detail } from './Detail';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const MovieBox = ({list}) => {    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="movie-box" onClick={handleShow}>
            <div className="overlay">
            <Card style={{ width: '15rem' }}>
                    <Card.Img class="card-img-top" variant="top" src={`https://image.tmdb.org/t/p/w200/${ list && list.poster_path}`} alt={list.title} />
                    <Card.Body>
                        <Card.Title>{list.title}</Card.Title>
                        <Card.Text>Lenguaje Original: {list.original_language}</Card.Text>
                        <Card.Text>Rating: {list.vote_average} / 10</Card.Text>
                    </Card.Body>
            </Card>
            </div><br></br>
        </div>
        
        <Modal show={show} onHide={handleClose}>
        
        
        <Modal.Header closeButton>
        <Modal.Title>{list.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><Card.Img class="card-img-top" variant="top" src={`https://image.tmdb.org/t/p/w200/${ list && list.poster_path}`} alt={list.title} /></Modal.Body>
        <Modal.Body>■ Lista de Géneros. </Modal.Body>
        <Modal.Body>Lenguaje original: {list.original_language}</Modal.Body>
        <Modal.Body>■ Presupuesto (budget).</Modal.Body>
        <Modal.Body>Descripción: {list.overview}</Modal.Body>
        <Modal.Body>Rating de popularidad: {list.popularity}</Modal.Body>
        <Modal.Body>■ Compañías de producción.</Modal.Body>
        <Modal.Body>Fecha de lanzamiento: {list.release_date}</Modal.Body>
        <Modal.Body>■ Estado de la película (Si está en: Rumored, Planned, In Production, Post Production, Released, Canceled).</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )

}

export default MovieBox