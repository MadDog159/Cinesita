import React from "react";
import './Item.css'

const Item = ({page, setPage}) => {
    return(
        <div className="pagination">
        <a  onClick={() =>setPage(--page)}>&laquo;</a>
        <button className="button" onClick={() =>setPage(1)}>1</button>
        <button className="button" onClick={() =>setPage(2)}>2</button>
        <button className="button" onClick={() =>setPage(3)}>3</button>
        <button className="button" onClick={() =>setPage(4)}>4</button>
        <button className="button" onClick={() =>setPage(5)}>5</button>
        <button className="button" onClick={() =>setPage(6)}>6</button>
        <button className="button" onClick={() =>setPage(7)}>7</button>
        <button className="button" onClick={() =>setPage(8)}>8</button>
        <button className="button" onClick={() =>setPage(9)}>9</button>
        <button className="button" onClick={() =>setPage(10)}>10</button>
        <a onClick={() =>setPage(++page)}>&raquo;</a>
      </div>
    )
}

export default Item;
