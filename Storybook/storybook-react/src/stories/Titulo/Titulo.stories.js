import Titulo from "./Titulo";

export default {
    component: Titulo,
    title: 'Atoms/Titulo',
    //tags: ['autodocs'],
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
        backgroundColor: 'yellow',
        textColor: 'black',
    }
}

export const Header2 = {
    args: {
        texto: 'Título medio',
        nivel: 'h2',
        backgroundColor: '#f4f4f4',
        textColor: 'yellowgreen',
    }
}

export const Header3 = {
    args: {
        texto: 'Título pequeño',
        nivel: 'h3',
        backgroundColor: 'lightblue',
        textColor: 'gray',
    }
}