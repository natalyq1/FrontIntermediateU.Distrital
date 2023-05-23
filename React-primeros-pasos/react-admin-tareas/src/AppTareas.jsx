//Librerias de React
import { useEffect, useState } from "react"

//Librerías externas

//Componentes propios
import { Fragment } from "react"
import Header from "./Components/Header/Header";
import Tareas from "./Components/Tareas/Tareas";

//Importar SCSS
import './styles/style.scss'
import AgregarTareaForm from "./Components/Tareas/Form/AgregarTareaForm";
import { obtenerTareasAPI } from "./api/tareasApi";
import Error from "./Components/Tareas/Error/Error";

function AppTareas() {
  //estado del componente inmutable
  const [tareas, setTareas] = useState([])
  const [error, setError] = useState(false)


  //HOOK q ejecuta codigo al crear el componente--inner function
  useEffect(() => {
    const obtenerTareas = async () => {
      //aca se hace la conexion con la API
        const data = await obtenerTareasAPI()
        if (data) {
          setTareas(data)
        } else {
          setTareas([])
          setError(true)
        }     
    }
    //obteniendo datos con AXIOS

    //obtiene las tareas del backend
    obtenerTareas()
  }, [])

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
      {error && <Error mensaje='Hubo un error al obtener las tareas' />}
      <Tareas
        tareas={tareas}
        onDelete={eliminarTarea}
        onToggle={toggleTerminada}
      />

    </Fragment>
  )
}

export default AppTareas
