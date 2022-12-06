import React,{useContext} from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Personajes = ()=>{
    const {store,actions} = useContext(Context);
    return <div className="container">
    <h1>Personajes</h1>
    <div className="row">
        {store.personajes.map((objeto, index)=>{
            return <Card titulo={objeto.name}/>
        })}
    </div>
    </div>
}