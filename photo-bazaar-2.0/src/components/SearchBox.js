import React, { useState } from "react";

export const SearchBox = ({ updateSearchQuery, apiStatus }) => {
  const [value, setValue] = useState("");

  const disableBtn = apiStatus === "pending" || apiStatus === "init";

  // new search ? back to page 1
  const onSearchImages = (e) => {
    e.preventDefault();
    updateSearchQuery(value.trim());
    setValue("");
  };

  return (
    <form className="search-box" onSubmit={onSearchImages}>
      <input
        type="text"
        placeholder="Search images..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="searchBtn" disabled={disableBtn}>
        Search
      </button>
    </form>
  );
};
