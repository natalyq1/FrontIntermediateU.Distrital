import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa'

const Tarea = ({tarea}) => {
  return (
    <li className="tarea"> {tarea.titulo} 
    <FaTrash style={{color: '#ff0000', fontSize: '0.9rem'}}/>
    </li>
  )
}

Tarea.propTypes = {
    tarea: PropTypes.object,
}


export default Tarea