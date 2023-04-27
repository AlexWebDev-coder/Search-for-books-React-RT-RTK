import { IBookData } from "../api/booksApi/books.type";

export interface IState {
  booksData: IBookData;
  isLoading: boolean;
  flagLoadMore: boolean;
  searchValue: string;
  sortingBy: string;
  category: string;
  startIndex: number;
}
