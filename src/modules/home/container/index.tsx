import BooksDetail from "src/components/common/books-detail";
import React from "react";
import BooksList from "../books-list";

const HomeContainer = () => {
  return (
    <>
      <h1 className="search__results_title">Found 433 results</h1>
      <BooksList />
    </>
  );
};

export default HomeContainer;
