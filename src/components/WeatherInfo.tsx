import React from 'react';
import './WeatherInfo.css'

// interface Props {
//     weatherData: 
// }
    // const place = data.name;
    // const temperature = data.main.temp;
    // const feels = data.main.feels_like;
    // const desc = data.weather[0].description;
    // const humid = data.main.humidity
    // const maxTemp = data.main.temp_max;

export const WeatherInfo = (props:any) => {
    const { data } = props;
    const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <section className="weatherInfo">
        <section className="cardTop">
            <span className="weatherCondition">  {data.weather[0].description} </span>
            <h1 className="city"> {data.name} </h1>
        </section>
        <div className='bottom-cards'>
            <section className="cardLeft">
                <span className="temp"> Temperature: {data.main.temp} °F </span>
                <img className="weather-icon" src={iconurl} alt=""  />
            </section>
            <div className ="border"> </div>
            <section className="cardRight">
                <span className="feelsLike"> Feels Like: {data.main.feels_like} °F </span>
                <span className="tempMax"> Wind Speed {data.wind.speed} miles/hr </span>
                <span className="humidty"> Humidity: {data.main.humidity} % </span>
            </section>
        </div>
</section>

  );
}


