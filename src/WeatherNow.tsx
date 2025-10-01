interface WeatherNowProps {
  temperature: number;
  feelsLike: number;
  wind: number;
  pressure: number;
  humidity: number;
}

export default function WeatherNow({
  temperature,
  feelsLike,
  wind,
  pressure,
  humidity,
}: WeatherNowProps) {
  return (
    <article className="weather-now">
      <header>Date</header>
      <p>Temperature: {temperature}</p>
      <p>Feels like: {feelsLike}</p>
      <footer className="weather-now__footer">
        <ul className="weather-now__addons">
          <li>Wind {wind} </li>
          <li>Pressure {pressure} </li>
          <li>Humidity {humidity}</li>
        </ul>
      </footer>
    </article>
  );
}
