import React from "react";
import CoinTracker from "./CoinTracker";
import ToDo from "./ToDo";
import Movies from "./Movies";
import RandomMovies from "./RandomMovies";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Detail from "./Detail";

export default function Home() {
  const onClick = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/ToDo">
                  <button value="ToDo" onClick={onClick}>
                    ToDo
                  </button>
                </Link>
                <Link to="/CoinTracker">
                  <button value="CoinTracker" onClick={onClick}>
                    CoinTracker
                  </button>
                </Link>

                <Link to="/Movie">
                  <button value="Movie" onClick={onClick}>
                    Movies
                  </button>
                </Link>
                <hr />
                <RandomMovies />
              </>
            }
          />
          <Route path="/Movie" element={<Movies />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/ToDo" element={<ToDo />} />
          <Route path="/CoinTracker" element={<CoinTracker />} />
        </Routes>
      </Router>
    </>
  );
}
