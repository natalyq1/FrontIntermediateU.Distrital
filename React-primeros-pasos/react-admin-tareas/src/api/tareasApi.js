import axios from 'axios'

/** 
 * Obtiene las tareas del backend
 * @returns Lista de tareas
 */

const obtenerTareasAPI = async () => {
    try {
        const respuesta = await axios.get(import.meta.env.VITE_BACKEND_URL)
        if (respuesta.status === 200) {
            return respuesta.data
        }
    }
    catch (error) {
        console.error('Hubo un error al obtener las tareas')
        return null
    }
}
/**
 * crea una tarea en el backend
 * @param {*} tarea tarea a crear
 * @returns Tarea creada
 */

const agregarTareaAPI = async (tarea) => {
    try {
        const respuesta = await axios.post(import.meta.env.VITE_BACKEND_URL, tarea)
        if (respuesta.status === 201) {
            return respuesta.data
        } else {
            console.error('Hubo un error al crear la nueva tarea');
        }
        console.log(respuesta);
    }
    catch (error) {
        console.error('Hubo un error al obtener las tareas')
        return null
    }
}
/**
 * Elimina una tarea del backend
 * @param {*} id identificador de la tarea
 * @returns un objeto vacio de la eliminacion fue exitosa y null de lo contrario
 */

const eliminarTareaAPI = async (id) => {
    try {
        const respuesta = await  axios.delete(`${import.meta.env.VITE_BACKEND_URL}${id}`)
        if (respuesta.status === 200) {
            return respuesta.data
        } 
        return null
    } catch (error) {
        console.error('Hubo un error al eliminar la tarea')
        return null
    }
}

const actualizarTareaAPI = async (id) => {
 try {
    const respuesta = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}${id}`)
    if (respuesta.status === 200) {
        return respuesta.data
    } 
    return null    
 } catch (error) {
    console.error('Hubo un error al actualizar la tarea');
    return null
 }
}

export { obtenerTareasAPI, agregarTareaAPI, eliminarTareaAPI, actualizarTareaAPI }