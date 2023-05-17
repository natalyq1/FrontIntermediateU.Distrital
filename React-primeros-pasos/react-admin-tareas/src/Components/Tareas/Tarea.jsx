import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa'

const Tarea = ({tarea, onDelete}) => {
  
  return (
    <li className="tarea"> {tarea.titulo} 
    <FaTrash 
    style={{color: '#ff0000', fontSize: '0.9rem'}}
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