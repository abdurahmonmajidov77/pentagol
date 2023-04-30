import { configureStore } from "@reduxjs/toolkit";
import LigaSlice from "./liga/index"

export const store = configureStore({
    reducer: {
        liga: LigaSlice
    }
})