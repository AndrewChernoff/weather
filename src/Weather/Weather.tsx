type Mainfo = {
    temp: number
    feels_like: number
    humidity: number
}


type WeatherProps = {
    cityWeather: {
        main: Mainfo
        name: string
        wind: {
            speed: number
        }
    }
}

const Weather = ({cityWeather}: WeatherProps) => {
    console.log(cityWeather)
    return (
        <div className="container">
        <div className="top">
          <div className="location">
          <p>{cityWeather.name}</p>
          </div>
          <div className="temp">
            <h1>{<h1>{cityWeather.main.temp.toFixed()}°C</h1>}</h1>
          </div>
          <div className="description">
            description
          </div>
        </div>
          <div className="bottom">
            <div className="feels">
              {<p className='bold'>{cityWeather.main.feels_like.toFixed()}°C</p>}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {<p className='bold'>{cityWeather.main.humidity}%</p>}
              <p>Humidity</p>
            </div>
            <div className="wind">
             {<p className='bold'>{cityWeather.wind.speed.toFixed()} MPH</p>}
              <p>Wind Speed</p>
            </div>
          </div>
      </div> 
    )
}

export default Weather;