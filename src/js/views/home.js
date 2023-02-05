import React, {useEffect, useContext} from "react";
import {Context} from "../store/appContext.js"
import "../../styles/home.css";
import { Link } from "react-router-dom"


export const Home = () => {

	const {store, actions} = useContext(Context)
	
	useEffect (() => {

		actions.getPeople()
		actions.getPlanets()
		actions.getVehicles()
	}, [])

	return (
		<>
		<h2 className="mt-5 text-warning">Characters</h2>
		<div className="text-center mt-5">
			<div className="row flex-nowrap overflow-scroll">
			{store.people.map((person, uid)=> {
				return(
					<div className="col" key={uid}>
						<h5 className="text-warning">{person.name}</h5>
						<div className="card custom-card button-card" style={{width: "18rem"}}>
				<img src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} className="card-img-top" alt="..."/>
				<div className="card-body">
				  <Link to={`/people/${person.uid}`}> <button className="btn btn-dark button">Más Info</button></Link>
				  <button onClick={ () => actions.getFavoritos(person.name)} href="#" className="btn btn-dark button ms-1"><i className="fa fa-heart text-danger" /></button>
				</div>
			  </div>
			  </div>
			  )
				
			})}
			
			</div></div>
			<h2 className="mt-5 text-warning">Vehicles</h2>
			<div className="text-center mt-5">
			<div className="row flex-nowrap overflow-scroll">
			{store.vehicles.map((vehicle)=> {
				return(
					<div className="col" key={vehicle.uid}>
						<h5 className="text-warning">{vehicle.name}</h5>
						<div className="card custom-card button-card" style={{width: "18rem"}}>
				<img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="..."/>
				<div className="card-body">
				<Link to={`/vehicles/${vehicle.uid}`}><button href="#" className="btn btn-dark button">Más Info</button></Link>
				  <button onClick={ () => actions.getFavoritos(vehicle.name)} href="#" className="btn btn-dark button ms-1"><i className="fa fa-heart text-danger" /></button>

				</div>
			  </div>
			  </div>
			  )
				
			})}
						</div></div>
						<h2 className="mt-5 text-warning">Planets</h2>
						<div className="text-center mt-5">
						<div className="row flex-nowrap overflow-scroll">
						{store.planets.map((planet)=> {
							return(
								<div className="col" key={planet.uid}>
									<h5 className="text-warning">{planet.name}</h5>
									<div className="card custom-card button-card" style={{width: "18rem"}}>
							<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..."/>
							<div className="card-body">
							<Link to={`/planets/${planet.uid}`}> <button href="#" className="btn btn-dark button">Más Info</button></Link>
							<button onClick={ () => actions.getFavoritos(planet.name)} href="#" className="btn btn-dark button ms-1"><i className="fa fa-heart text-danger" /></button>
							</div>
						  </div>
						  </div>
						  )
							
						})}
			
			</div></div>
			</>
	)
};
 
