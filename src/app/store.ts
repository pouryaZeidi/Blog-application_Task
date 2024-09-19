import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./featurs/userSlice";

export const store = configureStore({
    reducer:{
        user:userSlice
    }
})


export default store
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch