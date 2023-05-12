import {  Fragment } from "react"
import Header from "./Components/Header/Header";
import Opcion from "./Components/Opcion/Opcion";
//funcion que retorna algo
function App() {
  //variables
  const nombre = 'Catalina';
  const edad = 21;

  return (
    <Fragment>
   
      <div>Frontend Intermedio</div>
      <h1>Lenguajes</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
      </ul>
      <h2>La estudiante {nombre} y tiene {edad} años</h2>
      <h3>Es un {edad >18 ? 'adulto' : 'ninño' }</h3>
    <Header />
    <Opcion texto= 'Home' link='/'/>
    <Opcion texto= 'Products' link='/products'/>
    <Opcion texto= 'Services' link='/services'/>
    <Opcion />
    </Fragment>
  )
}

export default App
