import React, { useState, useEffect } from "react";
import axios from "../../helpers/axios";
import { Film } from "../../types/films";
import { Link } from "react-router-dom";
export default function Home() {
  const [films, setFilms] = useState<Film[]>([]);
  const [totalFilms, setTotalFilms] = useState<Film[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("films");
        setFilms(data.results);
        // setTotalFilms(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Films</h2>
      <ul>
        {films.map((film) => {
          const filmId = film.url.split("/");
          return (
            <Link to={`/people/${filmId[5]}`}>
              <li>{film.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
