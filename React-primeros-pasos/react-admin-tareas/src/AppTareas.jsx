//Librerias de React
import { useState } from "react"

//Librerías externas

//Componentes propios
import { Fragment } from "react"
import Header from "./Components/Header/Header";
import Tareas from "./Components/Tareas/Tareas";

//Importar SCSS
import './styles/style.scss'
import AgregarTareaForm from "./Components/Tareas/Form/AgregarTareaForm";

function AppTareas() {
  //estado del componente inmutable
  const [tareas, setTareas] = useState([])

const agregarTarea = (tarea) => {
  setTareas([...tareas, tarea])
}

  const toggleTerminada = (id) => {
    //tareasActuales representa el estado actual
    setTareas(tareasActuales => {
      //Recorre las tareas actuales para retornar vcada tarea
      return tareasActuales.map(tarea =>
        //verifica si la tarea tiene el mismo id
        tarea.id === id ? { ...tarea, terminada: !tarea.terminada } : tarea)
    })
  }

  const eliminarTarea = (id) => {
    //tareasActuales ---> representa el estado actual
    setTareas(tareasActuales => {
      //Filtra las tareas sin la tarea con el id recibido
      return tareasActuales.filter(tareas => tareas.id != id)
    })
  }

  return (
    <Fragment>

      <Header titulo='Administrador de tareas' />

      <AgregarTareaForm 
      onAddTask={agregarTarea}
      />
      <Tareas
        tareas={tareas}
        onDelete={eliminarTarea}
        onToggle={toggleTerminada}
      />

    </Fragment>
  )
}

export default AppTareas
