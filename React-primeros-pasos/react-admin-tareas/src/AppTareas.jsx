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
  //estado del componente inmutable
  const [ tareas, setTareas] = useState  ([
    { id: 1, titulo: 'Running' },
      { id: 2, titulo: 'Programming' },
      { id: 3, titulo: 'Reading' },
      { id: 4, titulo: 'Writing' },  
  ])
  const eliminarTarea = (id) =>{
    //tareasActuales ---> representa el estado actual
    setTareas(tareasActuales => {
      //Filtra las tareas sin la tarea con el id recibido
      return tareasActuales.filter(tareas => tareas.id != id )
    })
  }
  
  return (
    <Fragment>
   
    <Header titulo='Administrador de tareas'/>

    <Tareas 
    tareas = {tareas}
    onDelete={eliminarTarea}
    />
    
    </Fragment>
  )
}

export default AppTareas
