import styles from "./WeatherNow.module.css";

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
    <article className={styles.weather}>
      <header>Date</header>
      <p>Temperature: {temperature}</p>
      <p>Feels like: {feelsLike}</p>
      <footer className={styles.footer}>
        <ul className={styles.addons}>
          <li>Wind {wind} </li>
          <li>Pressure {pressure} </li>
          <li>Humidity {humidity}</li>
        </ul>
      </footer>
    </article>
  );
}
