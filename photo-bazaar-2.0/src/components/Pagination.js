import React from "react";
import "../styles/pagination.scss";

const Pagination = ({ pageNumber, setPageNumber, apiStatus }) => {
  const disableBtn = apiStatus === "pending" || apiStatus === "init";

  return (
    <div className="paginationContainer">
      <button
        className="material-icons"
        disabled={disableBtn || pageNumber === 1}
        onClick={() => setPageNumber((prev) => prev - 1)}
      >
        chevron_left
      </button>
      <span>Page {pageNumber}</span>
      <button
        className="material-icons"
        onClick={() => setPageNumber((prev) => prev + 1)}
        disabled={disableBtn}
      >
        chevron_right
      </button>
    </div>
  );
};

export default Pagination;
