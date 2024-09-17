import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        loading: false,
        user: null,
        // error: null,
        // success: false
        },
    reducers: {
        login: (state, action) => {
            state.loading = true
            state.user = action.payload.user
        },
        logout: (state, action) => {
            state.loading = false
            state.user = null
        }
    }
})

export const {login, logout} = authSlice.reducer
export default authSlice;