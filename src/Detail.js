import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./Movie.css";

export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setDetail(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <>
          <img
            className="movie__img"
            src={detail.medium_cover_image}
            alt={detail.title}
          />
          <div className="movie">
            <h2 className="movie__title">{detail.title}</h2>
            <p className="movie__year">{detail.year}</p>
            <ul className="movie__genres">
              {detail.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p>{detail.description_full}</p>
          </div>
          <button className="handleBack" onClick={handleBack}>
            Back
          </button>
        </>
      )}
    </div>
  );
}
