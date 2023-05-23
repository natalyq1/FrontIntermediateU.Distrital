import { useEffect, useState } from "react"
//import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


const AgregarTareaForm = ({ onAddTask }) => {
    //Estado del form
    const [titulo, setTitulo] = useState('')
    const [longitud, setLongitud] = useState(0);

    useEffect(() => {
      console.log("Acaba de ser renderizado!");
    });
  
    useEffect(() => {
      console.log("Solo se ejecuta al montar el componente");
    }, []);
  
    useEffect(() => {
      console.log("Se ejecuta cuando cambia la variable 'titulo'");
      setLongitud(titulo.length);
    }, [titulo]);

    const limpiarFormulario = (event) => {
        event.preventDefault()
        setTitulo('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!titulo) {
            alert("Debe digitar el titulo");
            return;
        }
        //crea el nuevo objeto
        const nuevaTarea = {
            //id: uuidv4(),
            titulo,
            terminada: false
        }
        //Envia la nueva tarea al componente padre
        onAddTask(nuevaTarea)

        //modifica el estado del componente
        setTitulo('')
    }
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
      <fieldset>
        <label htmlFor="titulo">Titulo: </label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
      </fieldset>
      <p> <small>Caracteres digitados: {longitud}</small></p>
      <fieldset>
        <input type="submit" value="Agregar" />
        <button onClick={limpiarFormulario}>Reset</button>
      </fieldset>
    </form>
    )
}

AgregarTareaForm.propTypes = {
    onAddTask: PropTypes.func,

}


export default AgregarTareaForm