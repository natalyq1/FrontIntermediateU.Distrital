import {  Fragment } from "react"
import Header from "./Components/Header/Header";
import Opcion from "./Components/Opcion/Opcion";
import Tareas from "./Components/Tareas/Tareas";
import Boton from "./Components/Boton/Boton";
import './styles/style.scss'
import Boton2 from "./Components/Boton/Boton2";
//funcion que retorna algo
function App() {
  //variables
  const nombre = 'Catalina';
  const edad = 21;
  const clickHandler =() => {
    console.log('clic en padre');
}  
return (
    <Fragment>
      
            {/* OBJETOS CON ESTILO INLINE */}
    <h2 style={{ color: 'red', background: 'pink' }}>Listado de tareas</h2>
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

    <Tareas />
    <Boton texto='boton 1' color= 'rose' />
    <Boton texto='boton 2' color= 'green'/>
    <Boton texto='boton 3' color= 'blue'/>
    <Boton2 onClickOnButton={clickHandler} />
    <ul className="countries">
      <li>Colombia</li>
      <li>Argentina</li>
      <li>Chile</li>
    </ul>
    </Fragment>
  )
}


export default App
