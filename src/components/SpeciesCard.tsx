import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Species } from "../types/species";
import { Link } from "react-router-dom";

export default function SpeciesCard({ urls }: { urls: string[] }) {
  const [species, setSpecies] = useState<Species[] | null>(null);

  useEffect(() => {
    (async () => {
      const requests: Promise<AxiosResponse<any, any>>[] = [];

      urls.forEach((url) => {
        requests.push(axios.get(url));
      });

      const responses = await Promise.all(requests);

      const species = responses.map((response) => response.data);

      setSpecies(species);
    })();
  }, []);

  return (
    <div>
      <h3>Species</h3>
      {species ? (
        <div>
          {species.map((specie) => {
            const id = specie.url.split("/")[5];
            return (
              <Link to={`/species/${id}`} key={`specie-${id}`}>
                <div>
                  <h3>{specie.name}</h3>
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
