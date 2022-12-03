import React from "react";
import "../../styles/home.css";
import { LongCard } from "../component/Card";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>StarWars Blog!</h1>
		<div className="row">
		<LongCard titulo="Ir a los planetas" ruta="/planetas"/>
		<LongCard titulo = "Ir a los Personajes" ruta= "/personajes" />
		</div>

	</div>
);
