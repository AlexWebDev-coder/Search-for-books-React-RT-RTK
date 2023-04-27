import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./features/api/booksApi/books.api";
import booksReducer from "./features/booksSlice/booksSlice";

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    booksState: booksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
