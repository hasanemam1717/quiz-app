import { configureStore } from "@reduxjs/toolkit";
import { quizSlice } from "./fetures/quiz/quizSlice";
import { quizApi } from "./api/quizApi";

export const store = configureStore({
    reducer: {
        quiz: quizSlice.reducer,
        [quizApi.reducerPath]: quizApi.reducer
    },
    middleware: (getDefaultMiddleWare) => {
        return getDefaultMiddleWare().concat(quizApi.middleware)
    }
})


// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store