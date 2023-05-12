/* eslint-disable react/prop-types */

const Opcion = ({texto, link}) => {
    console.log(texto);
  return (
    <a href={link}>{texto}</a>
  )
}
Opcion.defaultProps = {
    texto: 'ninguna',
    link: '/'
}

export default Opcion