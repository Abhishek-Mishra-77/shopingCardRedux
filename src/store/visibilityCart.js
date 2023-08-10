import { createSlice } from '@reduxjs/toolkit'

const initialState = { visiblity: false, notification: null };

const visibilitySlice = createSlice({
    name: 'visiblity',
    initialState: initialState,
    reducers: {
        Visiblity(state) {
            state.visiblity = !state.visiblity
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const visibilityActions = visibilitySlice.actions;

export default visibilitySlice.reducer;