import PropTypes from 'prop-types';


import './Header.css'
import { useContext } from 'react';
import LocalizationContext from '../../context/LocalizationContext';
const Header = () => {
  const { language } = useContext(LocalizationContext)
  return (
    <div>
        <header className="header">{language.header}</header>
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


