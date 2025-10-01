export default function Forecast() {
  return (
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
  );
}
