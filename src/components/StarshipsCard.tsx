import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Starship } from "../types/starships";
import { Link } from "react-router-dom";

export default function StarshipsCard({ urls }: { urls: string[] }) {
  const [starships, setStarships] = useState<Starship[] | null>(null);

  useEffect(() => {
    (async () => {
      const requests: Promise<AxiosResponse<any, any>>[] = [];

      urls.forEach((url) => {
        requests.push(axios.get(url));
      });

      const responses = await Promise.all(requests);

      const starships = responses.map((response) => response.data);

      setStarships(starships);
    })();
  }, []);

  return (
    <div>
      <h3>Starships</h3>
      {starships ? (
        <div>
          {starships.map((starship) => {
            const id = starship.url.split("/")[5];
            return (
              <Link to={`/starships/${id}`} key={`starship-${id}`}>
                <div>
                  <h3>{starship.name}</h3>
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
