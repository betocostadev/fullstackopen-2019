import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CapitalWeather = ({ capital }) => {
  const [ weather, setWeather ] = useState({
    current: {
      temperature: null,
      'weather_descriptions': [],
      'weather_icons': [],
      'wind_dir': null,
      'wind_speed': null
    }
  })
  const REACT_APP_WEATHER = process.env.REACT_APP_WEATHER
  const fetchWeather = () => {
    axios
    .get(`http://api.weatherstack.com/current?access_key=${REACT_APP_WEATHER}&query=${capital}`)
    .then(response => {
      setWeather(response.data)
      console.log(response.data)
    })
  }
  useEffect(fetchWeather, [])
  return (
    <div>
      <h1>Weather in { capital }</h1>
      <p>{weather.current.weather_descriptions[0]}</p>
      <img src={weather.current.weather_icons[0]} alt='weather icon' />
      <p>
        <strong>Temperature:</strong> {weather.current.temperature}º Celsius
      </p>
      <p>
        <strong>Wind:</strong> {weather.current.wind_speed} kph direction {weather.current.wind_dir}
      </p>
    </div>
  )
}

export default CapitalWeather