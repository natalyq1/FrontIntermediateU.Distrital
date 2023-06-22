import { PropTypes } from 'prop-types'
const Titulo = ({ texto, nivel, backgroundColor, textColor }) => {

    const estilo = {
        backgroundColor,
        color: textColor
    }

    if (nivel === 'h1') return <h1 style={estilo}>{texto}</h1>
    if (nivel === 'h2') return <h2 style={estilo}>{texto}</h2>
    if (nivel === 'h3') return <h3 style={estilo}>{texto}</h3>
    return (
        <h1>{texto}</h1>
    )
}

Titulo.propTypes = {
    texto: PropTypes.string,
    nivel: PropTypes.oneOf(['h1', 'h2', 'h3']),
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string
}

Titulo.defaultProps = {
    texto: 'Título',
    nivel: 'h1',
    backgroundColor: '#fff545',
    textColor: '#000'
}

export default Titulo