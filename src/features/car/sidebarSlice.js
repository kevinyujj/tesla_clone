import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
    name:'sidebar',
    initialState:{ value:{open:false} },
    reducers:{
        toggle:(state, action) => {
            state.value = action.payload
        },
    }
})

export const { toggle } = sidebarSlice.actions;

export default sidebarSlice.reducer