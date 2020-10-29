import React, { useState } from "react";
import "../style/Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className={
            showSearch ? "banner_searchActiveButton" : "banner_searchButton"
          }
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="banner_info">
        <h1>Go Near</h1>
        <h4>
          Settle in somewhere new. Discover stays to live, work, or just relax.
        </h4>
        <Button onClick={() => history.push('/search')} variant="outlined">Explore nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
