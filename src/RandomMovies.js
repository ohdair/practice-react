import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RandomMovies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [randomNumber, setRandomNumber] = useState(-1);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const onClick = () => {
    setRandomNumber(Math.floor(Math.random() * movies.length));
  };
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h4>Random Movies</h4>
          <button onClick={onClick}>Click</button>
          <hr />
          {randomNumber !== -1 ? (
            <div>
              <img
                src={movies[randomNumber].medium_cover_image}
                alt={movies[randomNumber].title}
              />
              <h3>
                <Link to={`/Movie/${movies[randomNumber].id}`}>
                  {movies[randomNumber].title}
                </Link>
              </h3>
              <ul>
                {movies[randomNumber].genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
export default RandomMovies;
