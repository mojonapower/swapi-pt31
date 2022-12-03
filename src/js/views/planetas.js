import React, {useContext} from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Planetas = ()=>{
    
    const {store} = useContext(Context);
    return <div className="container">
    <h1>Planetas</h1>
    <div className="row">
       {store.planetas.map((elm, index)=>{
        return <Card titulo={elm.name}/>
       })}
    </div>
    </div>
}