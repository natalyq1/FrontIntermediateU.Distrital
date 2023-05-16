import PropTypes from 'prop-types';

const Tareas = ({tareas}) => {
//estado del componente

    // Hook state
    //const [edad, setEdad] = useState(0)
    //estado es inmutable
    //edad = 7;
    //modifica el estado a través de la funcion set
    //setEdad(3)

    //{Expresion}
    return (
        <>
            {/* comentario con ctrl + k + c */}

            {/* OBJETOS CON ESTILO INLINE */}
            <h2 style={{ color: 'red', background: 'pink' }}>Listado de tareas</h2>
           
            <ul>
                {tareas.map(tarea => (
                    <li className="tarea" key={tarea.id}> {tarea.titulo}</li>
                ))}
            </ul>
        </>
    )
}

//validacion para las propiedades con libreria prop-types
//definicion de propiedades
Tareas.propTypes = {
    tareas: PropTypes.array,
}

export default Tareas