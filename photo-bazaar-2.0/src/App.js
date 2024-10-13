import "./App.scss";
import { useEffect, useState } from "react";
import { ImagesList } from "./components/ImagesList";
import { SearchBox } from "./components/SearchBox";
import axios from "axios";
import "material-icons/iconfont/filled.css";
import "material-icons/iconfont/outlined.css";

import Pagination from "./components/Pagination";


function App() {
  const [serverResponse, setServerResponse] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("nature");
  const [apiStatus, setApiStatus] = useState("init");

  const client_id = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

  const updateSearchQuery = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
    setPageNumber(1);
  };

  useEffect(() => {
    setApiStatus("pending");
    (async function () {
      try {
        const response = await axios({
          method: "GET",
          url: `https://api.unsplash.com/search/photos`,
          params: {
            page: pageNumber,
            query: searchQuery,
            client_id: client_id,
          },
        });
        setServerResponse(response.data.results);
        setApiStatus("success");
      } catch (error) {
        setApiStatus("error");
        alert("something went wrong");
        console.log(error);
      }
    })();
  }, [searchQuery, pageNumber]);

  return (
    <div className="container">
      <SearchBox updateSearchQuery={updateSearchQuery} apiStatus={apiStatus} />
      <ImagesList images={serverResponse} />
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        apiStatus={apiStatus}
      />
    </div>
  );
}

export default App;
