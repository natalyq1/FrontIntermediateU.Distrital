import { PropTypes } from 'prop-types'
const Titulo = ({ texto, nivel }) => {

    if (nivel === 'h1') return <h1>{texto}</h1>
    if (nivel === 'h2') return <h2>{texto}</h2>
    if (nivel === 'h3') return <h3>{texto}</h3>
    return (
        <h1>{texto}</h1>
    )
}

Titulo.propTypes = {
    texto: PropTypes.string,
    nivel: PropTypes.oneOf(['h1', 'h2', 'h3'])
}

Titulo.defaultProps = {
    texto: 'Título',
    nivel: 'h1'
}

export default Titulo