import './App.css';
import { Boton } from './components/boton'
import { Pantalla } from './components/pantalla'
import { BotonClear } from './components/botonClear'
import { useState } from 'react';
import React from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    switch (val) {
      case '➕':
        setInput(input + '+');
        break;
      case '➖':
        setInput(input + '-');
        break;
      case '✖️':
        setInput(input + '*');
        break;
      case '🟰':
        setInput(input + '=');
        break;
      case '➗':
        setInput(input + '/');
        break;
      default:
        setInput(input + val);
        break;
    }
  };

  const calcularResultado = ()=>(input) ? setInput(evaluate(input)) : alert('Ingrese valores');

  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>➕</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>➖</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>✖️</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>🟰</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>➗</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=>setInput('')}>Clear</BotonClear>
        </div>
      </div>
      <div className='repo-container'>
        <a href="https://github.com/Daniel-Barrios-J/creador-memes" target='_blank' rel='noreferrer'>
          Go to the GitHub repository
        </a>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon" width={'24px'} />
      </div>
    </div>
  );
}

export default App;
