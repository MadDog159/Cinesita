import React from 'react'
import { Card } from 'react-bootstrap'
import "./Profile.css"


const Detalles = (props) => {
  
  
  return (
    <div className="modalBackground">
   
      <div className="modalContainer">
          <div className="float-right">
              <div className="close">
                  <button onClick={()=>props.setModalOpen(false)} className="button">X</button>
              </div>
              <Card style={{ width: '15rem' }}>
                    <Card.Img className="card-img-top" variant="top" src={`https://image.tmdb.org/t/p/w200/${ props.list && props.list.poster_path}`} alt={props.list.title} />
                    <Card.Body>
                        <Card.Title>{props.list.title}</Card.Title>
                        <Card.Text>Lenguaje Original: {props.list.original_language}</Card.Text>
                        <Card.Text>Rating: {props.list.vote_average}</Card.Text>
                    </Card.Body>
            </Card>
          </div>
      </div>
  </div>
    
  )
}


export default Detalles