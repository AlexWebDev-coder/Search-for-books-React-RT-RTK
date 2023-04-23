import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { API_KEY, API_URL } from "../../../api/constants";
import { IParamsQuery } from "./books.type";
import { IBookData } from "./books.type";

export const booksApi = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getBooks: build.query<IBookData, IParamsQuery>({
      query: ({ searchValue, sortingBy, startIndex, subjectCategory }) =>
        `volumes?q=${searchValue}&subject:${subjectCategory}&orderBy=${sortingBy}&maxResults=30&startIndex=${startIndex}&key=${API_KEY}`,
    }),
  }),
});

export default {} = booksApi;
