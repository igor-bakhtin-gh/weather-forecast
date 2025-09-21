import { useState } from "react";

const API_KEY = "1f09ba2c556c86dg7afadcd2b05fe003"; //example, not a real key
const BASE_GEO_URL = "http://api.openweathermap.org/geo/1.0/direct?";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

function App() {
  const [location, setLocation] = useState("London");
  const [forecast, setForecast] = useState({});

  async function handleClick() {
    const geoApiUrl = `${BASE_GEO_URL}q=${location}&limit=1&appid=${API_KEY}`;
    const geo = await fetch(geoApiUrl)
      .then((response) => response.json())
      .then((data) => {
        return { lat: data[0].lat, lon: data[0].lon };
      });

    const weatherApiUrl = `${BASE_WEATHER_URL}lon=${geo.lon}&lat=${geo.lat}&appid=${API_KEY}&units=metric`;
    fetch(weatherApiUrl)
      .then((response) => response.json())
      .then((data) => setForecast(data));
  }

  return (
    <>
      <header>
        <form>
          <search>
            <label>
              Your City:
              <input
                type="search"
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
            <button onClick={handleClick}>Search</button>
          </search>
        </form>
      </header>
      <main>
        Temperature: {Object.hasOwn(forecast, "main") && forecast.main.temp}
        Feels like:{" "}
        {Object.hasOwn(forecast, "main") && forecast.main.feels_like}
      </main>
      <footer>
        My Github{" "}
        <a href="https://github.com/igor-bakhtin-gh">@igor-bakhtin-gh</a>
      </footer>
    </>
  );
}

export default App;
