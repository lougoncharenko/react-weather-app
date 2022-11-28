import React, { useState }from 'react';
import {WeatherInfo} from './WeatherInfo';
import './HeaderSearch.css'

export const Search = () => {
    const [city, setCity] = useState<string>("");
    const [weather, setWeather] = useState<any>([]);

    async function fetchWeather (e: any) {
        e.preventDefault();
        // alert(`The city you entered was: ${city}`);
        if (e.target.value == null) {
          alert('Enter a valid city')
        } else {
          let unit = "imperial"
          const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units='+ unit + '&appid=17e839bf7c9e67959dd1caff492f7051')
          const data = await response.json();
          setWeather({ data: data });
        }
      }
  return (
    <>
    <form onSubmit={fetchWeather} className="search">
    <span className ="add">🔍</span>
    <input 
    type="text" 
    value = {city}
    placeholder = 'Enter a city...'
    className='search-bar' 
    onChange={(e) => setCity(e.target.value)}
    />
    <button type="submit" className='search-button'>Search</button>
    </form>

    {weather.data != undefined ? (
        <div>
          <WeatherInfo data={weather.data} />
        </div>
      ) : null}
  </>
    
  );
}
