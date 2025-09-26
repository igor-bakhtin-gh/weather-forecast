import { useState } from "react";

const API_KEY = "1f09ba2c556c86dg7afadcd2b05fe003"; //example, not a real key
const BASE_GEO_URL = "http://api.openweathermap.org/geo/1.0/direct?";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});

  async function handleClick() {
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
  }

  return (
    <>
      <header>
        <label>
          Your City:
          <input type="search" onChange={(e) => setLocation(e.target.value)} />
        </label>
        <button onClick={handleClick}>Search</button>
      </header>
      {Object.keys(weather).length ? (
        <main>
          <article>
            <header>Date</header>
            <p>Temperature: {weather.main.temp}</p>
            <footer>Feels like: {weather.main.feels_like}</footer>
          </article>
          <article>
            <ul>
              <li>
                <button>Today</button>
              </li>
              <li>
                <button>Tomorrow</button>
              </li>
              <li>
                <button>5 days</button>
              </li>
            </ul>
            <ul>
              <li>
                <article>
                  <header>Weekday, time</header>
                  <p>Temperature</p>
                  <footer>Wind</footer>
                </article>
              </li>
              <li>
                <article>
                  <header>Weekday, time</header>
                  <p>Temperature</p>
                  <footer>Wind</footer>
                </article>
              </li>
              <li>
                <article>
                  <header>Weekday, time</header>
                  <p>Temperature</p>
                  <footer>Wind</footer>
                </article>
              </li>
            </ul>
          </article>
        </main>
      ) : (
        ""
      )}
      <footer>
        My Github{" "}
        <a href="https://github.com/igor-bakhtin-gh">@igor-bakhtin-gh</a>
      </footer>
    </>
  );
}

export default App;
