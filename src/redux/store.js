import { configureStore } from "@reduxjs/toolkit";
import LigaSlice from "./liga/index"
import MatchSlice from "./match/index"
import NewsSlice from "./news/index"
import GroupSlice from "./group/index"

export const store = configureStore({
    reducer: {
        liga: LigaSlice,
        match: MatchSlice,
        news: NewsSlice,
        group: GroupSlice
    }
})