import { Boton } from "../Boton/Boton"
import Titulo from "../Titulo/Titulo"
import './Barrasuperior.css'

/**
 * Este es la <strong>Barra superior</strong> de la aplicación, que contiene los <strong>botones</strong> principales de la aplicación y el <strong>titulo</strong> de la aplicación.
 
 */

const BarraSuperior = () => {
    return (
        <div className="toolbar">
            <Titulo texto='Frontend Inc.' nivel='h1' textColor='#019cfd' backgroundColor='#fff' />
            <div className="toolbar-btns">
                <Boton label='Inicio' />
                <Boton label='Productos' />
                <Boton label='Servicios' />
                <Boton label='Ingresar' primary={false} />
            </div>
        </div>
    )
}

export default BarraSuperior