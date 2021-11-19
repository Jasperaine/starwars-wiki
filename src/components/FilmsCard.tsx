import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Film } from "../types/films";
import { Link } from "react-router-dom";

export default function FilmsCard({ urls }: { urls: string[] }) {
  const [films, setFilms] = useState<Film[] | null>(null);

  useEffect(() => {
    (async () => {
      const requests: Promise<AxiosResponse<any, any>>[] = [];

      urls.forEach((url) => {
        requests.push(axios.get(url));
      });

      const responses = await Promise.all(requests);

      const films = responses.map((response) => response.data);

      setFilms(films);
    })();
  });

  return (
    <div>
      <h3>Films</h3>
      {films ? (
        <div>
          {films.map((film) => {
            const id = film.url.split("/")[5];
            return (
              <Link to={`/films/${id}`} key={`film-${id}`}>
                <div>
                  <h3>{film.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
