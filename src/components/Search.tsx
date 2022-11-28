import React, { useState }from 'react';
import {WeatherInfo} from './WeatherInfo';

import './HeaderSearch.css'

export const Search = () => {
    const [city, setCity] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert(`The city you entered was: ${city}`);
      }
  return (
    <form onSubmit={handleSubmit} className="search">
    <span className ="add">🔍</span>
    <input 
    type="text" 
    value = {city}
    className='search-bar' 
    onChange={(e) => setCity(e.target.value)}
    />
    <button type="submit" className='search-button'>Search</button>
    </form>
    
  );
}


