import React from 'react';
import './HeaderSearch.css'

export const Search = () => {
  return (
    <form className="search">
    <span className ="add">🔍</span>
    <input type="text" className='search-bar' />
    <button className='search-button'>Search</button>
    </form>
    
  );
}


