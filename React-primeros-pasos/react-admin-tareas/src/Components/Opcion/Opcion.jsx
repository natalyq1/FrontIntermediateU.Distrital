/* eslint-disable react/prop-types */
import './Opcion.css'
const Opcion = ({texto, link}) => {
    console.log(texto);
  return (
    <a className="opcion" href={link}>{texto}</a>
  )
}
Opcion.defaultProps = {
    texto: 'ninguna',
    link: '/'
}

export default Opcion