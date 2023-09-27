import React, { useState } from 'react'
import './weath.css'
import search_icon from './icons/search.png'
import clear_icon from './icons/clear.png'
import cloud_icon from './icons/cloud.png'
import rain_icon from './icons/rain.png'
import drizzle_icon from './icons/drizzle.png'
import humidity_icon from './icons/humidity.png'
import snow_icon from './icons/snow.png'
import wind_icon from './icons/wind.png'


export default function Weat() {
  let api_key = "bac90243ccba19bc81582ca9988e3138";
  const [iconing,setIconing] = useState(cloud_icon);
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value === ""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-per");
    const wind = document.getElementsByClassName("wind-rate");
    const temp = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = Math.floor(data.main.humidity) + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " Km/h";
    temp[0].innerHTML = Math.floor(data.main.temp) + " °C";
    location[0].innerHTML = data.name; 

    if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
      setIconing(clear_icon)
    }
    else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
      setIconing(cloud_icon)
    }
    else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
      setIconing(drizzle_icon)
    }
    else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
      setIconing(drizzle_icon)
    }
    else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
      setIconing(rain_icon)
    }
    else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
      setIconing(rain_icon)
    }
    else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
      setIconing(snow_icon)
    }
    else{
      setIconing(clear_icon)
    }
  }
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type = 'text' className='cityInput' placeholder='search'/>
        <div className='search-icon' onClick={()=>{search()}}>
          <img src={search_icon} alt=''/>
        </div>
      </div>
      <div className='weather-image'>
        <img src={iconing} alt=''/>
      </div>
        <div className='weather-temp'>24°C</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
          <div className='element'>
          <img src={humidity_icon} alt='' className='icon'/>
          <div className='data' >
            <div className='humidity-per'>10%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} alt='' className='icon'/>
          <div className='data' >
            <div className='wind-rate'>1 Km/h</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
        </div>
    </div>
  )
}
