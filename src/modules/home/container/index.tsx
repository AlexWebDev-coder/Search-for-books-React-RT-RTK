import React from "react";
import BooksList from "../books-list";
import store from "src/store";
import { observer } from "mobx-react";

const HomeContainer = () => {
  const {
    books: { totalItems },
  } = store;

  return (
    <>
      <h1 className="search__results_title">
        {!!totalItems && ` Found ${totalItems} results`}
      </h1>
      <BooksList bookStore={store} />
    </>
  );
};

export default observer(HomeContainer);
