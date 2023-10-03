
import './weatherApp.css'
import clear from '../../assets/clear.png'
import cloud from '../../assets/cloud.png'
import drizzle from '../../assets/drizzle.png'
import humidity from '../../assets/humidity.png'
import rain from '../../assets/rain.png'
import search from '../../assets/search.png'
import snow from '../../assets/snow.png'
import wind from '../../assets/wind.png'
import { useState } from 'react'
const WeatherApp = () => {
    const [wicon, setWicon] = useState(clear)
    let apiKey = "1959fa1b382ada4f6d3fa059a97aa7c8"
    const searchIcon = async () => {

        const element = document.getElementsByClassName("cityInput")
        

        if(element[0].value === " ") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element}&units=Metric&appid=${apiKey}`

        let response = await fetch(url)
        let data = await response.json()

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate")
        const temp = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")
    
        humidity[0].innerHTML = data.main.humidity+ " %";
        wind[0].innerHTML = Math.floor( data.wind.speed)+ " km/h";
        temp[0].innerHTML =Math.floor( data.main.temp)+ "°C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            setWicon(clear)
        } else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setWicon(cloud)
        } else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setWicon(drizzle)
        } else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setWicon(drizzle)
        } else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setWicon(rain)
        } else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setWicon(rain)
        } else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setWicon(snow)
        } else {
            setWicon(clear)
        }
    }
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search'/>
            <div className="search-icon" onClick={() => {searchIcon()}}>
                <img src={search} alt="" />
            </div>
        </div>

        <div className="weather-img">
            <img src={wicon} alt="" />
        </div>
        <div className="weather-temp">24 °C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity} alt="" className='icon'/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>

            <div className="element">
                <img src={wind} alt="" className='icon' />
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp