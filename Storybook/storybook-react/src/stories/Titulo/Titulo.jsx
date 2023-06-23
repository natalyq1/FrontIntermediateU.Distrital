import { PropTypes } from 'prop-types'

/**
 * Estos son los <strong>posibles títulos</strong> de la aplicación. <br>
 * Se debe utilizar teniendo en cuenta los <i>parámetros</i> descritos en la parte inferior.
 */
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
    /** Texto a mostrar en el título */
    texto: PropTypes.string,
    /** Tipo de título a mostrar */
    nivel: PropTypes.oneOf(['h1', 'h2', 'h3']),
    /** Color de fondo del título */
    backgroundColor: PropTypes.string,
    /** Color del texto del título */
    textColor: PropTypes.string
}

Titulo.defaultProps = {
    texto: 'Título',
    nivel: 'h1',
    backgroundColor: '#fff545',
    textColor: '#000'
}

export default Titulo