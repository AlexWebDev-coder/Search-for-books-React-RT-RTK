import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, API_URL } from "../../../../api/constants";
import { IParamsQuery, IBookData } from "./books.type";

export const booksApi = createApi({
  reducerPath: "api/books",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getBooks: build.query<IBookData, IParamsQuery>({
      query: ({ searchValue, sortingBy, startIndex, subjectCategory }) =>
        `volumes?q=${searchValue}&subject:${subjectCategory}&orderBy=${sortingBy}&maxResults=30&startIndex=${startIndex}&key=${API_KEY}`,
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
