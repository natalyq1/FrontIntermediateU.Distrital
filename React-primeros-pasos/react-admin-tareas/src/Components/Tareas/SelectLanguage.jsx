import PropTypes from 'prop-types'

const SelectLanguage = ({onLanguageChange}) => {//windows + . para los iconos


    return <div className="languages">
        <span onClick={() => onLanguageChange('es')}>español 📢 </span>
        <span onClick={() => onLanguageChange('en')}>ingles</span>
    </div>
}

SelectLanguage.propTypes = {
    onLanguageChange: PropTypes.func
}

export default SelectLanguage