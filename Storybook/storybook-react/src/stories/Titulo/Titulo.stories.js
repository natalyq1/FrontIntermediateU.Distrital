import Titulo from "./Titulo";

export default {
    component: Titulo,
    title: 'Components/Titulo',
    argTypes: {
        nivel: {
            //select, radio, inline-radio
            control: 'inline-radio',
        }
    }
}

export const Header1= {
    args: {
        texto: 'Título grande',
        nivel: 'h1',
    }
}

export const Header2 = {
    args: {
        texto: 'Título medio',
        nivel: 'h2',
    }
}

export const Header3 = {
    args: {
        texto: 'Título pequeño',
        nivel: 'h3',
    }
}