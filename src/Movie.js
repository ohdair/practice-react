import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movie({ poster, title, id, genres }) {
  return (
    <div>
      <img src={poster} alt={title} />
      <h2>
        <Link to={`/Movie/${id}`}>{title}</Link>
      </h2>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  poster: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};
