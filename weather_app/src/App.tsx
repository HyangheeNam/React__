import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };

  weather: { description: string }[];
}

function App() {

  const [city, setCity] = useState<string>('seoul');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const API_KEY = '00d98a3f4ff5c8e252fbb88f8b8268e0';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  //async: 비동기 - 요청이 있을 때만 실행 (요청을 기다림)
  //q= : 파라미터 (요청 값)
  const fetchWeather = async (city: string) => {
    try{
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
    } catch(err){
        setError("fail");
    } finally{
      setLoading(false);
    }
  };

  const addFavorite = () => {
    if(!favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  const removeFavorite = (favoriteCity: string) => {
    setFavorites(favorites.filter( fav => fav !== favoriteCity ));
  };

  useEffect ( () => {
    fetchWeather(city);
  }, [city] );

  return (
    <div className="App">

      <div>
        <input 
          type="text"
          placeholder='Enter city...'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => fetchWeather(city)}>Search</button>
      </div>

      { loading && <p>Loading...</p> }
      { error && <p style={ {color: "red"} }>{error}</p> }

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Condition: {weather.weather[0].description}</p>
          <button onClick={addFavorite}>Add to Favorites</button>
        </div>
      )}
      
      <div>
        <h3>Favorites</h3>
        <ul>
          {favorites.map( (fav) => (
            <li key={fav}>
              {fav}
              <button onClick={() => fetchWeather(fav)}>View</button>
              <button onClick={() => removeFavorite(fav)}>Remove</button>
            </li>
          ) )}
        </ul>
      </div>


    </div>
  );
}

export default App;
