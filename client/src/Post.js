export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1235254642.jpg?w=430&h=230&crop=1"
          alt="post"
        ></img>
      </div>

      <div className="texts">
        <h2>
          Apple acquires AI startup specializing in overlooking manufacturing
          components
        </h2>
        <p className="info">
          <a className="author" href="https://www.google.ro/">
            Dadu
          </a>
          <time>2024-03-15 16:45</time>
        </p>
        <p className="summary">
          Apple has added another AI startup to its acquisition list with
          Canada-based DarwinAI, which specializes in vision-based tech to
          observe components during manufacturing to improve efficiency,
          Bloomberg reported.
        </p>
      </div>
    </div>
  );
}
