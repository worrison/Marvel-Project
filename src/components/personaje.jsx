import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Personaje(props)
{
    
    return (<div>
                <h1>{props.name}</h1>
                <Link to={"/detalle/" + props.id}><img src={ props.thumbnail.path +"."+ props.thumbnail.extension }></img></Link>
         </div>);
}

    
export default Personaje;