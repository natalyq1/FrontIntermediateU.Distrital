
import { useContext } from 'react'
//acceso al contexto
import LocalizationContext from '../../context/LocalizationContext'
import local from '../../context/ContextData'


const SelectLanguage = () => {
    //windows + . para los iconos

    //obtener la referencia al contexto
    // Obtiene la referencia al contexto
    const { language, setLanguage } = useContext(LocalizationContext);

    const handleChangeLanguage = (lang) => {
        setLanguage(local[lang]);
    };

    return (
        <>
            <p>🗣 {language.idioma}</p>
            <div className="languages">

                <span onClick={() => handleChangeLanguage("es")}>🇪🇸 </span>
                <span onClick={() => handleChangeLanguage("en")}>🇬🇧</span>
                <span onClick={() => handleChangeLanguage("fr")}>🇫🇷</span>
            </div>
        </>
    )
}


export default SelectLanguage