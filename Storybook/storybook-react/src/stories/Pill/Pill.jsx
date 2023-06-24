import PropTypes from 'prop-types';
import './Pill.css'

const Pill = ({ label, icon, backgroundColor, textColor }) => {

    const estilo = {
        backgroundColor,
        color: textColor,
    }

    return (
        <button
            className="pill" href="#" style={estilo}>
            <div className='icon'>{icon}</div>
            <div className='label'>{label}</div>
            </button>
    )
}

Pill.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    icon: PropTypes.element,
}

Pill.defaultProps = {
    label: 'Pill',
    backgroundColor: 'blue',
    textColor: 'white',
    icon: <div>Icon</div>,
}

export default Pill