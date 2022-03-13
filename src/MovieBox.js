import React, { useState, useEffect } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import Profile from "./Profile";
const MovieBox = ({ list }) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const j = useState();
    
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${list.id}?api_key=dea5d1d72df02ec5cc84f8afd612808b&language=es-MX`).then(function(response) { 
	// Convert to JSON
	return response.json();
}).then(function(j) {
	// Yay, `j` is a JavaScript object
	console.log(j);
});}, [j]);

        return (
            <>
                <div onClick={handleShow} className="movie-box">
                    <div className="overlay">
                        <Card style={{ width: "15rem" }}>
                            <Card.Img
                                className="card-img-top"
                                variant="top"
                                src={`https://image.tmdb.org/t/p/w200/${list && list.poster_path
                                    }`}
                                alt={list.title}
                            />
                            <Card.Body>
                                <Card.Title>{list.title}</Card.Title>
                                <Card.Text>Lenguaje Original: {list.original_language}</Card.Text>
                                <Card.Text>Rating: {list.vote_average} / 10</Card.Text>
                                <Card.Text>Rating: {j.runtime}/ 10</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <br></br>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{list.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card.Img
                            className="card-img-top"
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w200/${list && list.poster_path}`}
                            alt={list.title}
                        />
                    </Modal.Body>
                    <Modal.Body>■ Lista de Géneros.</Modal.Body>
                    <Modal.Body>Lenguaje original: {list.original_language}</Modal.Body>
                    <Modal.Body>■ Presupuesto (budget).</Modal.Body>
                    <Modal.Body>Descripción: {list.overview}</Modal.Body>
                    <Modal.Body>Rating de popularidad: {list.popularity}</Modal.Body>
                    <Modal.Body>■ Compañías de producción.</Modal.Body>
                    <Modal.Body>Fecha de lanzamiento: {list.release_date}</Modal.Body>
                    <Modal.Body>
                        ■ Estado de la película (Si está en: Rumored, Planned, In Production,
                        Post Production, Released, Canceled).
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
};

export default MovieBox;
