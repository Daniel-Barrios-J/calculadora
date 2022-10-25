import React from "react";
import '../stylesheets/botonClear.css'

export const BotonClear = (props) => (
  <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
);