import PropTypes from 'prop-types';


import './Header.css'
const Header = ({ titulo}) => {
  return (
    <div>
        <header className="header">{titulo}</header>
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


