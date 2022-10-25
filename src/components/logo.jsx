import React from "react";
import '../stylesheets/logo.css'

export const Logo = (props) => (
  <div className='logo-contenedor'>
    <img className='logo' src={props.imagen} alt={props.nombre}/>
  </div>
);