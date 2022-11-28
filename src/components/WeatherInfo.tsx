import React from 'react';

const WeatherInfo = () => {
  return (
    <section className="weatherInfo">

    <div className="cardTop">
      <span className="weatherCondition"></span>
      <h1 className="city"></h1>
    </div>

    <div className="cardLeft">
      <span className="temp"></span>
      <span className="deg">°F</span>
      </div>


      <div className="cardRight">
        <span className="feelsLike"></span>
        <span className="tempMax"></span>
        <span className="humidty"></span>
      </div>

</section>

  );
}

export default WeatherInfo;
