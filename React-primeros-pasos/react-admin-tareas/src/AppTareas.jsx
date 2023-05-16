//Librerias de React
import { useState } from "react"

//Librerías externas

//Componentes propios
import {  Fragment } from "react"
import Header from "./Components/Header/Header";
import Tareas from "./Components/Tareas/Tareas";

//Importar SCSS
import './styles/style.scss'

function AppTareas() {
  //estado del componente
  const [ tareas, setTareas] = useState  ([
    { id: 1, titulo: 'Running' },
      { id: 2, titulo: 'Programming' },
      { id: 3, titulo: 'Reading' },
      { id: 4, titulo: 'Writing' },  
  ])
  
  return (
    <Fragment>
   
    <Header titulo='Administrador de tareas'/>

    <Tareas tareas = {tareas}/>
    
    </Fragment>
  )
}

export default AppTareas
