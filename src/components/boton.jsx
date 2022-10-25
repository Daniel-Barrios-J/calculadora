import React from "react";
import '../stylesheets/boton.css'

export const esOperador = valor => {
  return isNaN(valor) && (valor !== '.') && (valor !== '=')
};
export const Boton = (props) => {
  return(
    <button 
      className={`boton-contenedor ${esOperador(props.children) ?'operador' : ''}`.trimEnd()}
      onClick={()=>props.manejarClick(props.children)}>
      {props.children}
    </button>
  );

  // OTRA ALTERNATIVA CON CONDICIONALES
  // return(
  //   <div 
  //   className='boton-contenedor operador'
  //   onClick={()=>props.manejarClick(props.children)}>
  //   {props.children}
  //   </div>
  // ) 
  // } else {
  //   return(
  //     <div 
  //     className='boton-contenedor'
  //     onClick={()=>props.manejarClick(props.children)}>
  //     {props.children}
  //     </div>
  //   ) 
  // }
}