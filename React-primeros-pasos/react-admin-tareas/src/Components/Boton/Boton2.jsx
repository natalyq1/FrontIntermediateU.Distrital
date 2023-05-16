import PropTypes from 'prop-types'

const Boton2 = ({onClickOnButton}) => {

  return (
    <button onClick={onClickOnButton}>Cilc here</button>
  )
}
Boton2.propTypes = {
    onClickOnButton: PropTypes.func,
}

export default Boton2