import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa'

const Tarea = ({tarea, onDelete}) => {
  
  return (
    <li className={tarea.terminada && 'terminada'}> 
      {tarea.titulo}
    <FaTrash 
    className='icono'
    onClick={ () => onDelete(tarea.id)}
    />
    </li>
  )
}

Tarea.propTypes = {
    tarea: PropTypes.object,
    onDelete: PropTypes.func,
}


export default Tarea