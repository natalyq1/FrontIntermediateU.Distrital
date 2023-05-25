//Librerias de React
import { useEffect, useReducer, useState } from "react"

//Librerías externas

//Componentes propios
import { Fragment } from "react"
import Header from "./Components/Header/Header";
import Tareas from "./Components/Tareas/Tareas";

//Importar SCSS
import './styles/style.scss'
import AgregarTareaForm from "./Components/Tareas/Form/AgregarTareaForm";
import { agregarTareaAPI, eliminarTareaAPI, obtenerTareasAPI, actualizarTareaAPI } from "./api/tareasApi";
import Error from "./Components/Tareas/Error/Error";
import LocalizationContext from "./context/LocalizationContext";
import SelectLanguage from "./Components/Tareas/SelectLanguage";
import local from "./context/ContextData";
import tareasReducer from "./Components/Tareas/reducers/TareasReducer";


const AppTareas = () => {
  //estado del componente 
  //Reducer
const [tareas, dispatch] = useReducer(tareasReducer, [])

  const [error, setError] = useState(false)
  const [language, setLanguage] = useState(local.es)


  //HOOK q ejecuta codigo al crear el componente--inner function
  useEffect(() => {
    const obtenerTareas = async () => {
      // Obtiene las tareas del backend
      const tareas = await obtenerTareasAPI();
      if (tareas) {
        // Modifica el state
        dispatch({ type: "CARGAR", tareas });
        setError(false);
      } else {
        // Modifica el state
        dispatch({ type: "CARGAR" });
        setError(true);
      }
    };

    // Obtiene las tareas del backend
    obtenerTareas();
  }, []);

  const agregarTarea = async (tarea) => {
    // Agrega la tarea en Backend
    const nuevaTarea = await agregarTareaAPI(tarea);
    // Agrega la tarea en el state
    dispatch({ type: "AGREGAR", nuevaTarea });
  };

  const toggleTerminada = async (id, terminada) => {
    //actualizar la tarea en el Backend
    const respuesta = await actualizarTareaAPI(id, terminada)
    // Modifica el state
    if (respuesta) {
      dispatch({ type: "MODIFICAR", id, terminada });
    }
    
  };

  const eliminarTarea = async (id) => {
    // Elimina la tarea del backend
    const respuesta = await eliminarTareaAPI(id);
    // Verifica que la eliminación de la tarea haya sido exitosa
    if (respuesta) {
      // Modifica el state
      dispatch({ type: "ELIMINAR", id });
    }
  };


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
