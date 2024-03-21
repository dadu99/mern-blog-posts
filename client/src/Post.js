import { formatISO9075 } from "date-fns";

export default function Post({ title, summary, cover, content, createdAt }) {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1235254642.jpg?w=430&h=230&crop=1"
          alt="post"
        ></img>
      </div>

      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">Dadu</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
