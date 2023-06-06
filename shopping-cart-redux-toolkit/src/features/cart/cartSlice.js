import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../data/cartItems';

// Estado inicial
const initialState = {
    cartItems,
    amount: 4,
    total: 0,
}

// Creación del slice
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            // Obtiene el id del artículo a eliminar
            const itemId = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== itemId)
        },
        increaseItemAmount: (state, action) => {
            //Obtiene el id del articulo a incrementar
            const itemId = action.payload;
            //Busca el articulo en el carrito
            const item = state.cartItems.find((item) => item.id === itemId)
            //incrementa la cantidad
            item.amount++
        },
        decreaseItemAmount: (state, action) => {
            //Obtiene el id del articulo a incrementar
            const itemId = action.payload;
            //Busca el articulo en el carrito
            const item = state.cartItems.find((item) => item.id === itemId)
            //decrementa la cantidad
            item.amount--
        }
    }
})
export const { clearCart, removeItem, increaseItemAmount, decreaseItemAmount } = cartSlice.actions
export default cartSlice.reducer