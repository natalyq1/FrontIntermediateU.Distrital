import PropTypes from 'prop-types';


import './Header.css'
import Boton2 from '../Boton/Boton2';
const Header = ({ titulo}) => {
  return (
    <div>
        <header className="header">{titulo}</header>
        <Boton2 />
    </div>
  )
}

Header.defaultProps = {
  titulo: 'Task manager',
}

Header.propTypes = {
  titulo: PropTypes.string,
}

export default Header


