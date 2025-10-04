import { useState } from "react";
import type { Forecast } from "../../App";
import styles from "./Forecast.module.css";

interface ForecastProps {
  forecast: Forecast;
}

interface ListProps {
  period: string;
  forecast: Forecast;
}

function List({ period, forecast }: ListProps) {
  const today = new Date();
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );
  const filteredForecast = forecast.list.filter((item) => {
    const itemDate = new Date(item.dt_txt);
    switch (period) {
      case "today":
        return itemDate.getDate() === today.getDate();
      case "tomorrow":
        return itemDate.getDate() === tomorrow.getDate();
      case "fiveDays":
        return itemDate.getHours() === 12;
    }
  });
  const listItems = filteredForecast.map((item) => {
    const date = new Date(item.dt_txt);
    let format = (
      <>
        <p>{date.toLocaleDateString("ru-RU", { weekday: "short" })}</p>
        <p>
          {date.toLocaleDateString("ru-RU", {
            month: "long",
            day: "numeric",
          })}
        </p>
      </>
    );
    if (period !== "fiveDays") {
      format = (
        <p>
          {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      );
    }
    return (
      <li key={item.dt}>
        <article className="forecast__list-item">
          <header>{format}</header>
          <p>{item.main.temp} °C</p>
          <footer>{item.wind.speed}</footer>
        </article>
      </li>
    );
  });
  return <ol className={styles.list}>{listItems}</ol>;
}

export default function Forecast({ forecast }: ForecastProps) {
  const [period, setPeriod] = useState("today");
  return (
    <article className="forecast">
      <ol className={styles.menu}>
        <li>
          <button onClick={() => setPeriod("today")}>Today</button>
        </li>
        <li>
          <button onClick={() => setPeriod("tomorrow")}>Tomorrow</button>
        </li>
        <li>
          <button onClick={() => setPeriod("fiveDays")}>5 days</button>
        </li>
      </ol>
      <List period={period} forecast={forecast} />
    </article>
  );
}
