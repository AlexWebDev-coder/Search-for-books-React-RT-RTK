import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./booksSlice.type";
import { IBookData } from "../../../hooks/query/booksApi/books.type";

const initialState: IState = {
  booksData: { items: [], totalItems: 0 },
  isLoading: false,
  flagLoadMore: false,
  searchValue: "",
  sortingBy: "relevance",
  category: "all",
  startIndex: 1,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks: (state, action: PayloadAction<IBookData>) => {
      state.booksData = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortingBy = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setFlagLoadMore: (state, action: PayloadAction<boolean>) => {
      state.flagLoadMore = action.payload;
    },
  },
});

export const { getBooks } = booksSlice.actions;
export default booksSlice.reducer;
