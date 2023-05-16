import PropTypes from 'prop-types';
import Tarea from './Tarea';

const Tareas = ({tareas}) => {
    //{Expresion}
    return (
        <>
            {/* comentario con ctrl + k + c */}

            {/* OBJETOS CON ESTILO INLINE */}
            <h2 style={{ color: 'red', background: 'pink' }}>Listado de tareas</h2>
           
            <ul>
                {tareas.map(tarea => (
                    <Tarea key={tarea.id} tarea={tarea} />
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