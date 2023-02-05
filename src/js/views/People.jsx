import React, { useContext, useEffect, useState} from "react";
import "../../styles/index.css";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"


const People = (props) => {

  const params = useParams();
  const [detalle, setDetalle] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(async () => {
      const res = await fetch(`https://www.swapi.tech/api/people/${params.uid}`)
      const data = await res.json();
      console.log({detalle: data});
      setDetalle(data.result);
      setCargando(false);
  },[])

  if(cargando){
      return <div className="text-warning">La info está cargando...</div>
  };

return (
  <>
        <div className="card mb-3 style=max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
    </div>
    <div className="col-md-8">
      <div className="card-body" >
        <h3 className="card-title text-warning mb-4">{detalle.properties.name} </h3>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} className="card-img-top photo border border-3 border-info" alt="..."/>
        <h5 className="card-text text-warning mt-3">PROPERTIES</h5> 
        <p className="card-text"><small className="text-warning">GENDER: {detalle.properties.gender}</small></p>
        <p className="card-text"><small className="text-warning">BIRTH YEAR: {detalle.properties.birth_year}</small></p>
        <p className="card-text"><small className="text-warning">SKIN COLOR: {detalle.properties.skin_color}</small></p>
        <p className="card-text"><small className="text-warning">HAIR COLOR: {detalle.properties.hair_color}</small></p>
        <p className="card-text"><small className="text-warning">HEIGHT: {detalle.properties.height}</small></p>
      </div>
    </div>
  </div>
</div>
</>
)
}

export default People;