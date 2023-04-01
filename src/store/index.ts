import { observable, action, makeObservable } from "mobx";
import api from "../api/axios";
import { API_KEY } from "../api/constants";
import { IBookData } from "./types";

class BookStore {
  @observable isLoading: boolean = false;
  @observable flagLoadMore: boolean = false;
  @observable searchValue: string = "";
  @observable sortingBy: string = "relevance";
  @observable category: string = "all";
  @observable startIndex: number = 1;
  @observable books: IBookData = { items: [], totalItems: 0 };

  constructor() {
    makeObservable(this);
  }

  @action setSearchValue = (value: string) => {
    this.searchValue = value;
  };
  @action setSortBy = (value: string) => {
    this.sortingBy = value;
  };
  @action setCategory(category: string) {
    this.category = category;
  }
  @action setFlagLoadMore(flag: boolean) {
    this.flagLoadMore = flag;
  }

  @action getBooks = async (): Promise<void> => {
    try {
      if (!this.searchValue) return;
      this.isLoading = true;

      // const categoryCondition =
      //   this.category !== "all" ? `${"+subject:" + this.category}` : "";

      const response = await api.get(
        `volumes?q=${this.searchValue}&orderBy=${this.sortingBy}&maxResults=30&startIndex=${this.startIndex}&key=${API_KEY}`
      );

      if (!this.flagLoadMore) this.books = response.data;

      if (this.flagLoadMore) {
        this.books = {
          ...this.books,
          items: [...this.books.items, ...response.data.items],
          totalItems: response.data.totalItems,
        };
      }

      this.isLoading = false;
      this.flagLoadMore = false;
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  @action loadMoreBooks() {
    this.startIndex += 1;
    this.getBooks();
  }
}

const store = new BookStore();

export default store;
