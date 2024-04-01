import React from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ filterContact }) => {
  return (
      <label className={css.searchBox}>
      <span>Find contact by name</span>
      <input type="text" onChange={filterContact} placeholder="Search" />
    </label>
  );
};

export default SearchBox;
