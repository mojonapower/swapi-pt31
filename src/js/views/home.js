import React, {useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import { LongCard } from "../component/Card";
import { Context } from "../store/appContext";
export const Home = () =>{
	
	const {store,actions} = useContext(Context);

	return(
	<div className="text-center mt-5">
		<h1>{store.titulo}</h1>
		<div className="row">
		<LongCard titulo="Ir a los planetas" ruta="/planetas"/>
		<LongCard titulo = "Ir a los Personajes" ruta= "/personajes" />


		<button onClick={()=>actions.cambiarTitulo()}>cambiar titulo</button>
		</div>

	</div>
);
}
