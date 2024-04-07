import React from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = ({ filterContact }) => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();
  const handleSearch = (ev) => {
    dispatch(filterContacts(ev.target.value));
  };
  return (
    <label className={css.searchBox}>
      <span>Find contact by name</span>
      <input
        type="text"
        value={filter}
        onChange={handleSearch}
        placeholder="Search"
      />
    </label>
  );
};

export default SearchBox;
