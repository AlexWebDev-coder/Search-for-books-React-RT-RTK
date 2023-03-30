import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FormTextField from "../../../components/form/textfield";
import FormSelect from "../../../components/form/select";

const DefaultLayoutHeader = () => {
  const [search, setSearch] = useState<string>("");
  const [value, setValue] = useState<string>("all");
  const [sort, setSort] = useState<string>("elevance");

  const valuesSelectCategories = [
    "all",
    "art",
    "biography",
    "computers",
    "history",
    "medical",
    "poetry",
  ];

  const valueSelectSorting = ["elevance", "newest"];

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header_title">
            <h1 className="title">Search for books</h1>
          </div>
          <div className="search__input">
            <FormTextField
              icon={<SearchIcon />}
              name="search"
              variant="outlined"
              margin="normal"
              placeholder="Write this..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="sorting__select">
            <div className="sorting__select_categories">
              <FormSelect
                value={value}
                onChange={(e) => setValue(e.target.value as string)}
                values={valuesSelectCategories}
                inputLabel="Categories"
              />
            </div>
            <div className="sorting__select_sortingBy">
              <FormSelect
                value={sort}
                onChange={(e) => setSort(e.target.value as string)}
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

export default DefaultLayoutHeader;
