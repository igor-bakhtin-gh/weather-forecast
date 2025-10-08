import type { Weather } from "../../App";
import styles from "./WeatherNow.module.css";

interface WeatherNowProps {
  weather: Weather;
}

export default function WeatherNow({ weather }: WeatherNowProps) {
  return (
    <article className={styles.weather}>
      <header>Date</header>
      <p>Temperature: {weather.main.temp}</p>
      <p>Feels like: {weather.main.feels_like}</p>
      <footer className={styles.footer}>
        <ul className={styles.addons}>
          <li>Wind {weather.wind.speed} </li>
          <li>Pressure {Math.round(weather.main.pressure / 1.333)} </li>
          <li>Humidity {weather.main.humidity}</li>
        </ul>
      </footer>
    </article>
  );
}
