import React from 'react'

const MovieBox = ({list}) => {
    
    return (
        <div className="movie-box">
            <div className="overlay">
            <img src={`https://image.tmdb.org/t/p/w200/${ list && list.poster_path}`} alt={`${list && list.title} Poster`}/>
            <br></br><a>Titulo: </a>{list.title}<br></br>
            <a>Lenguaje original: </a> {list.original_language}<br></br>
            <a>Rating: </a> {list.vote_average}<br></br>
            </div><br></br>
        </div>
    )
}

export default MovieBox