import { useState } from "react";

const API_KEY = "1f09ba2c556c95cc7afadcd2b05fe003";
const BASE_GEO_URL = "http://api.openweathermap.org/geo/1.0/direct?";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});

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
      <header className="search">
        <form action="">
          <input type="search" onChange={(e) => setLocation(e.target.value)} />
          <button onClick={handleClick}>Search</button>
        </form>
      </header>
      {Object.keys(weather).length ? (
        <main className="main">
          <article className="weather">
            <header>Date</header>
            <p>Temperature: {weather.main.temp}</p>
            <p>Feels like: {weather.main.feels_like}</p>
            <footer className="weather__footer">
              <ul className="weather__addons">
                <li>Wind</li>
                <li>Pressure</li>
                <li>Humidity</li>
              </ul>
            </footer>
          </article>
          <article className="forecast">
            <ol className="forecast__menu">
              <li>
                <button>Today</button>
              </li>
              <li>
                <button>Tomorrow</button>
              </li>
              <li>
                <button>5 days</button>
              </li>
            </ol>
            <ol className="forecast__list">
              <li>
                <article className="forecast__list-item">
                  <header>Date</header>
                  <p>Temperature</p>
                  <footer>Wind</footer>
                </article>
              </li>
              <li>
                <article className="forecast__list-item">
                  <header>Date</header>
                  <p>Temperature</p>
                  <footer>Wind</footer>
                </article>
              </li>
              <li>
                <article className="forecast__list-item">
                  <header>Date</header>
                  <p>Temperature</p>
                  <footer>Wind</footer>
                </article>
              </li>
            </ol>
          </article>
        </main>
      ) : (
        ""
      )}
      <footer className="footer">
        My Github{" "}
        <a href="https://github.com/igor-bakhtin-gh">@igor-bakhtin-gh</a>
      </footer>
    </>
  );
}

export default App;
