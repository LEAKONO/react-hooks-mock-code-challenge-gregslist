
import React from "react";
import Search from "./Search";

function Header({ searchQuery, setSearchQuery }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </header>
  );
}

export default Header;



