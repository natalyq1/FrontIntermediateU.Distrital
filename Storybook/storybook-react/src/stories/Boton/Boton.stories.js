import { Boton }from "./Boton";

export default {
    component: Boton,
    title: 'Components/Boton'
}

//stories
export const Primary = {
    args:{
        label: 'Primary',
        primary: true
    }
}

export const Secondary = {
    args: {
        label: 'Secondary',
        primary: false
    }
}

export const Large = {
    args: {
        label: 'Grande',
        primary: false,
        size: 'large'
    }
}

export const Medium = {
    args: {
        label: 'Medio',
        primary: false,
        size: 'medium'
    }
}

export const Small = {
    args: {
        label: 'Pequeño',
        primary: false,
        size: 'small'
    }
}
