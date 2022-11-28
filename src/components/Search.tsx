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

async function fetchWeather(location: string){
    let unit = "imperial"
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units='+ unit + '&appid=17e839bf7c9e67959dd1caff492f7051')
    const data = await response.json();
    const place = data.name;
    const temperature = data.main.temp;
    const feels = data.main.feels_like;
    const desc = data.weather[0].description;
    const humid = data.main.humidity
    const maxTemp = data.main.temp_max;
}
