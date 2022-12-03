import React from "react";
import { Link } from "react-router-dom";


export const LongCard = (props)=>{
    return (
    <div className="card">
  <div className="card-header">

  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to={props.ruta}>
        <a  className="btn btn-primary">{props.titulo}</a>
    </Link>
  </div>
</div>)
}

export const Card = ({titulo, ruta, descripcion})=>{

    return <div className="card" style={{width: "18rem"}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/800px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{descripcion}</p>
      <div className="row">
        <div className="col-8">
        <Link to={ruta}>
        <a href="#" className="btn btn-primary">Ir al detalle</a>
      </Link>
        </div>
        
        <div className="col">
        <button className="btn btn-warning">🧡</button>
        </div>
    
        
      </div>
    </div>
  </div>
}