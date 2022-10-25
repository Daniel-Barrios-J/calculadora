import './App.css';
// import freeCodeCampLogo from './img/freecodecamp-logo.png'
// import { Boton, esOperador } from './components/boton'
import { Boton } from './components/boton'
import { Pantalla } from './components/pantalla'
import { BotonClear } from './components/botonClear'
import { useState } from 'react';
import React from 'react';
import { evaluate } from 'mathjs';
// import { Logo } from './components/logo';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = ()=>(input) ? setInput(evaluate(input)) : alert('Ingrese valores');

  return (
    <div className="App">
      {/* <Logo imagen={freeCodeCampLogo} nombre='freeCodeCamp logo' /> */}
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=>setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
