import type { Weather } from "../../App";
import styles from "./WeatherNow.module.css";

interface WeatherNowProps {
  weather: Weather;
}

export default function WeatherNow({ weather }: WeatherNowProps) {
  console.log(weather.dt + "1000");
  const date = new Date(Number(weather.dt + "000"));

  return (
    <article className={styles.weather}>
      <header>
        <p>{date.toLocaleDateString("ru-RU", { weekday: "short" })}</p>
        <p>
          {date.toLocaleDateString("ru-RU", {
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>
      <p>{weather.main.temp} °C</p>
      <p>Feels like: {weather.main.feels_like}°C</p>
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
