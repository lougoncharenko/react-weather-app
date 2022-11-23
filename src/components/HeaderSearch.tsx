import React from "react";
import './HeaderSearch.css'


export const HeaderSearch = () => {
  return (
    <header>
    <h1>What is the weather?</h1>
    <div className ="search">
        <span className ="add">🔍</span>
        <input className ="searchBar" type="text" value="Search City..." />
      </div>
    </header>
  );
}


