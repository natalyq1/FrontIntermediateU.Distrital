import { createSlice } from '@reduxjs/toolkit';

//Inicializacion del estado
const initialState = {
    isOpen: false,
    isClose: false,
}

//Creacion del slice
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
    }
})

//Exporta los reducers
export const { openModal, closeModal } = modalSlice.actions

//Exporta el slice con reducer
export default modalSlice.reducer;