import { createSlice } from '@reduxjs/toolkit';


const initialState = { products: [], totalQuantity: 0 };

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.products = action.payload.products
        },
        addProductToCart(state, action) {
            state.count = state.count + 1;
            const newProduct = action.payload
            const existingProduct = state.products.find((product) => product.id === newProduct.id)
            state.totalQuantity++;
            if (!existingProduct) {
                state.products.push({
                    id: newProduct.id,
                    price: newProduct.price,
                    title: newProduct.title,
                    quantity: 1,
                    totalPrice: newProduct.price,
                    description: newProduct.description
                })
            }
            else {
                existingProduct.quantity++;
                existingProduct.totalPrice = existingProduct.totalPrice + newProduct.price
            }
        },
        removeProductToCart(state, action) {
            const id = action.payload
            state.count = state.count - 1;
            const existingProductId = state.products.find((product) => product.id === id)
            if (existingProductId.quantity > 1) {
                existingProductId.quantity--;
                existingProductId.totalPrice = existingProductId.totalPrice - existingProductId.price
            }
            else {
                state.products = state.products.filter((product) => product.id !== id)
            }
        }
    }
})




export const cartActions = cartSlice.actions;

export default cartSlice.reducer;