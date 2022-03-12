import React from 'react'
import { Card } from 'react-bootstrap'

const MovieBox = ({list}) => {
    
    return (
        <div className="movie-box">
            <div className="overlay">
            <Card style={{ width: '15rem' }}>
                    <Card.Img class="card-img-top" variant="top" src={`https://image.tmdb.org/t/p/w200/${ list && list.poster_path}`} alt={list.title} />
                    <Card.Body>
                        <Card.Title>{list.title}</Card.Title>
                        <Card.Text>Lenguaje Original: {list.original_language}</Card.Text>
                        <Card.Text>Rating: {list.vote_average}</Card.Text>
                    </Card.Body>
            </Card>
            </div><br></br>
        </div>
    )
}

export default MovieBox