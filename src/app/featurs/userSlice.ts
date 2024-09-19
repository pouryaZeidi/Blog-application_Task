import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    auth:null | string
}

const initialState:initialState = {
    auth:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setToken:(state=initialState,action:PayloadAction<string>)=>{
            state.auth = action.payload
        }
    }
})

export const {setToken} = userSlice.actions

export default userSlice.reducer