import PropTypes from 'prop-types';
import Tarea from './Tarea';

const Tareas = ({ tareas, onDelete, onToggle }) => {

    //{Expresion}
    return (
        <>
            {/* comentario con ctrl + k + c */}

            {!tareas.length && 'No hay tareas'}
            <ul className='tareas'>
                {tareas.map(tarea => (
                    <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))}
            </ul>
        </>
    )
}
//validacion para las propiedades con libreria prop-types
//definicion de propiedades
Tareas.propTypes = {
    tareas: PropTypes.array,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
}

export default Tareas