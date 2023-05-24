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
import { actualizarTareaAPI, agregarTareaAPI, eliminarTareaAPI, obtenerTareasAPI } from "./api/tareasApi";
import Error from "./Components/Tareas/Error/Error";
import LocalizationContext from "./context/LocalizationContext";
import SelectLanguage from "./Components/Tareas/SelectLanguage";
import local from "./context/ContextData";


const AppTareas = () => {
  //estado del componente inmutable
  const [tareas, setTareas] = useState([])
  const [error, setError] = useState(false)
  const [language, setLanguage] = useState(local.es)


  //HOOK q ejecuta codigo al crear el componente--inner function
  useEffect(() => {
    const obtenerTareas = async () => {
      //aca se hace la conexion con la API
      const tareas = await obtenerTareasAPI()
      if (tareas) {
        setTareas(tareas)
        setError(false)
      } else {
        setTareas([])
        setError(true)
      }
    }
    //obteniendo datos con AXIOS

    //obtiene las tareas del backend
    obtenerTareas()
  }, [])

  const agregarTarea = async (tarea) => {
    const nuevaTarea = await agregarTareaAPI(tarea)
    // Agrega la tarea al backend
    setTareas([...tareas, nuevaTarea])
  }

  const toggleTerminada = async (id) => {
    const respuesta = await actualizarTareaAPI(id)

    if (respuesta) {
      //tareasActuales representa el estado actual
      setTareas(tareasActuales => {
        //Recorre las tareas actuales para retornar cada tarea
        return tareasActuales.map(tarea =>
          //verifica si la tarea tiene el mismo id
          tarea.id === id ? { ...tarea, terminada: !tarea.terminada } : tarea)
      })
    }
  }

  const eliminarTarea = async (id) => {
    //elimina la tarea del backend
    const respuesta = await eliminarTareaAPI(id)
    //verifica que la eliminacion de la tarea haya sido exitosa
    if (respuesta) {
      //tareasActuales ---> representa el estado actual
      setTareas(tareasActuales => {
        //Filtra las tareas sin la tarea con el id recibido
        return tareasActuales.filter(tareas => tareas.id != id)
      })
    }
  }

  return (
    <Fragment>
      <LocalizationContext.Provider value={{language, setLanguage}}>
        <SelectLanguage />
        <Header />

        <AgregarTareaForm
          onAddTask={agregarTarea}
        />
        {error && <Error mensaje='Hubo un error al obtener las tareas' />}
        <Tareas
          tareas={tareas}
          onDelete={eliminarTarea}
          onToggle={toggleTerminada}
        />
      </LocalizationContext.Provider>
    </Fragment >
  )
}

export default AppTareas
