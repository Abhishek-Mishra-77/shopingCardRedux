import { createSlice } from '@reduxjs/toolkit'

const initialState = { cartVisible: true };

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        visiblity(state) {
            state.cartVisible = !state.cartVisible;
        }
    }
})


export const cartActions = cartSlice.actions;

export default cartSlice.reducer;