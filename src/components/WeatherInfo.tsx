import React from 'react';
import './WeatherInfo.css'

const WeatherInfo = () => {
  return (
    <section className="weatherInfo">
        <section className="cardTop">
            <span className="weatherCondition"></span>
            <h1 className="city"></h1>
        </section>
        <div className='bottom-cards'>
            <section className="cardLeft">
                <span className="temp"></span>
                {/* insert weather icon here */}
            </section>
            <div className ="border"> </div>
            <section className="cardRight">
                <span className="feelsLike"></span>
                <span className="tempMax"></span>
                <span className="humidty"></span>
            </section>
        </div>
</section>

  );
}

export default WeatherInfo;
