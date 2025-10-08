import { useState } from "react";
import Search from "./components/Search/Search";
import Forecast from "./components/Forecast/Forecast";
import WeatherNow from "./components/WeatherNow/WeatherNow";

const API_KEY = "1f09ba2c556c95cc7afadcd2b05fe003";
const BASE_GEO_URL = "http://api.openweathermap.org/geo/1.0/direct?";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

interface Main {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
}
export interface Weather {
  main: Main;
  wind: Wind;
  dt: number;
  dt_txt: string;
}
export interface Forecast {
  list: Weather[];
}

function App() {
  const [weather, setWeather] = useState<Weather>();
  const [forecast, setForecast] = useState<Forecast>();

  async function handleSubmit(formData: FormData) {
    const location = formData.get("query");

    const geoApiUrl = `${BASE_GEO_URL}q=${location}&limit=1&appid=${API_KEY}`;
    const geo = await fetch(geoApiUrl)
      .then((response) => response.json())
      .then((data) => {
        return { lat: data[0].lat, lon: data[0].lon };
      });

    const weatherApiUrl = `${BASE_URL}/weather?lon=${geo.lon}&lat=${geo.lat}&appid=${API_KEY}&units=metric`;
    fetch(weatherApiUrl)
      .then((response) => response.json())
      .then((data) => setWeather(data));

    const forecastApiUrl = `${BASE_URL}/forecast?lon=${geo.lon}&lat=${geo.lat}&appid=${API_KEY}&units=metric`;
    fetch(forecastApiUrl)
      .then((response) => response.json())
      .then((data) => {
        setForecast(data);
        console.log(data);
      });
  }

  return (
    <>
      <Search handleSubmit={handleSubmit} />
      {weather && forecast && (
        <main className="main">
          <WeatherNow weather={weather} />
          <Forecast forecast={forecast} />
        </main>
      )}
      <footer className="footer">
        My Github{" "}
        <a href="https://github.com/igor-bakhtin-gh">@igor-bakhtin-gh</a>
      </footer>
    </>
  );
}

export default App;
