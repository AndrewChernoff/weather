import axios, { AxiosResponse } from "axios";

export type Res = {
    name: string
    main: Mainfo
    wind: {
        speed: number
    }
}

type Mainfo = {
    temp: number
    feels_like: number
    humidity: number
}


export const getWeather = async(location: string) => { 
    let res = await axios.get<any>(
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=04067ae6017ae773c28724cc5f4e3f86&units=metric`
)
console.log(res);

        return  {
            name: res.data.name,
            main: {
                temp: res.data.main.temp,
                feels_like: res.data.main.feels_like,
                humidity: res.data.main.humidity
              },
              wind: {
                speed: res.data.wind.speed
              }
        }
}

