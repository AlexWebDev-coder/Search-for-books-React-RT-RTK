import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FormTextField from "src/components/form/textfield";
import FormSelect from "src/components/form/select";
import { observer } from "mobx-react";
import store from "src/store";

const valuesSelectCategories = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];

const valueSelectSorting = ["relevance", "newest"];

const DefaultLayoutHeader = () => {
  const hanleSearchBooks = () => {
    store.getBooks();
  };

  useEffect(() => {
    store.getBooks();
  }, []);

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      hanleSearchBooks();
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header_title">
            <h1 className="title">Search for books</h1>
          </div>
          <div className="search__input">
            <FormTextField
              icon={<SearchIcon onClick={hanleSearchBooks} />}
              name="searchValue"
              variant="outlined"
              margin="normal"
              placeholder="Write this..."
              value={store.searchValue}
              onChange={(e) => store.setSearchValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="sorting__select">
            <div className="sorting__select_categories">
              <FormSelect
                value={store.category}
                onChange={(e) => store.setCategory(e.target.value)}
                values={valuesSelectCategories}
                inputLabel="Categories"
              />
            </div>
            <div className="sorting__select_sortingBy">
              <FormSelect
                value={store.sortingBy}
                onChange={(e) => store.setSortBy(e.target.value as string)}
                values={valueSelectSorting}
                inputLabel="Sorting By"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default observer(DefaultLayoutHeader);
