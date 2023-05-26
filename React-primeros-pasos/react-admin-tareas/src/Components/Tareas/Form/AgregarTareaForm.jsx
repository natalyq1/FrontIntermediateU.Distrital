import { useContext, useEffect, useState } from "react"
//import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import LocalizationContext from "../../../context/LocalizationContext";
import useInput from "../../../hooks/useInput";


const AgregarTareaForm = ({ onAddTask }) => {
  //Estado del form con CUSTOM HOOK
  const [titulo, bindTitulo, resetTitulo] = useInput('')
  const [descripcion, bindDescripcion, resetDescripcion] = useInput('')

  //Estado del form con useState
  const [longitud, setLongitud] = useState(0);

  //accede al context
  const { language } = useContext(LocalizationContext)
  //console.log(language);

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
    resetTitulo('')
    resetDescripcion('')
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
      descripcion,
      terminada: false
    }
    //Envia la nueva tarea al componente padre
    onAddTask(nuevaTarea)

    //modifica el estado del componente
    resetTitulo('')
    resetDescripcion('')
  }
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <fieldset>
        <label htmlFor="titulo">{language.title}: </label>
        <input
          type="text"
          id="titulo"
          {...bindTitulo}
        />
      </fieldset>

      <p className="caracteres"> <small>{language.characters}: {longitud}</small></p>

      <fieldset>
        <label htmlFor="descripcion">{language.descripcion}: </label>
        <input
          type="text"
          id="descripcion"
          {...bindDescripcion}
        />
      </fieldset>


      <fieldset>
        <input type="submit" value={language.add} />
        <button onClick={limpiarFormulario}>{language.reset}</button>
      </fieldset>
    </form>
  )
}

AgregarTareaForm.propTypes = {
  onAddTask: PropTypes.func,

}


export default AgregarTareaForm