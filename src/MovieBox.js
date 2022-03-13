import React, { useState, useEffect } from "react";
import { Card, Modal, Button } from "react-bootstrap";

const MovieBox = ({ list }) => {
  let fetchingConst = true;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    fetchingConst = !fetchingConst;
  };

  const [j, setJ] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${list.id}?api_key=dea5d1d72df02ec5cc84f8afd612808b&language=es-MX`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setJ(response);
      });
  }, [fetchingConst]);

  return (
    <>
      <div onClick={handleShow} className="movie-box">
        <div className="overlay">
          <Card style={{ width: "15rem" }}>
            <Card.Img
              className="card-img-top"
              variant="top"
              src={`https://image.tmdb.org/t/p/w200/${
                list && list.poster_path
              }`}
              alt={list.title}
            />
            <Card.Body>
              <Card.Title>{list.title}</Card.Title>
              <Card.Text>Lenguaje Original: {list.original_language}</Card.Text>
              <Card.Text>Rating: {list.vote_average} / 10</Card.Text>
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
        <Modal.Body>
          Lista de Géneros:{" "}
          {j.genres?.map((genero) => (
            <p key={genero.id}>{`■ ${genero.name} `}</p>
          ))}
        </Modal.Body>
        <Modal.Body>Lenguaje original: {list.original_language}</Modal.Body>
        <Modal.Body>Presupuesto: {j.budget}</Modal.Body>
        <Modal.Body>Descripción: {list.overview}</Modal.Body>
        <Modal.Body>Rating de popularidad: {list.popularity}</Modal.Body>
        <Modal.Body>
          Compañías de producción:{" "}
          {j.production_companies?.map((company) => (
            <p key={company.id}>{`■ ${company.name} `}</p>
          ))}
        </Modal.Body>
        <Modal.Body>Fecha de lanzamiento: {list.release_date}</Modal.Body>
        <Modal.Body>Estado de la película: {j.status}</Modal.Body>
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
