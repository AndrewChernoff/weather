import React, { ChangeEvent, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather/Weather";
import { getWeather } from "./API/api";

function App() {
  const [cityWeather, setCityWeather] = useState(JSON.parse(localStorage.getItem('cityWeather') as string) || null);
  const [location, setLocation] = useState<string>('');
  const [error, setError] = useState(false)

  useEffect(() => {
    localStorage.setItem('cityWeather', JSON.stringify(cityWeather));
  }, [cityWeather]);

const searchLocation = () => { 
  setError(false);
      getWeather(location)
      .then((res: any) => {
        setCityWeather(res);
      }).catch((e) => setError(true));
      setLocation('');
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setLocation(event.currentTarget.value)}
          placeholder='Enter Location'
          type="text" />
          <button onClick={searchLocation} disabled={location.trim().length === 0? true : false}>Search</button>
      </div>
     {(cityWeather && !error) && <Weather cityWeather={cityWeather} />}
     {error && <h1 className='error'>City is not found</h1>}
    </div>
  );
}

export default App;
