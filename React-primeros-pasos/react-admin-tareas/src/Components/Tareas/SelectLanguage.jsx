
import { useContext } from 'react'
//acceso al contexto
import LocalizationContext from '../../context/LocalizationContext'
import local from '../../context/ContextData'


const SelectLanguage = () => {//windows + . para los iconos

    //obtener la referencia al contexto
    let { language, setLanguage } = useContext(LocalizationContext)

    const hadleChangeLanguage = (lang) => {
        if (lang === 'es') {
            setLanguage(local.es)
        }
        if (lang === 'en') {
            setLanguage(local.en)
        }
    }

    return (
    <>
    <p>{language.idioma}</p>
    <div className="languages">

        <span onClick={() => hadleChangeLanguage('es')}>español  </span> 📢
        <span onClick={() => hadleChangeLanguage('en')}>ingles</span>
    </div>
    </>
    )
}


export default SelectLanguage