import React, { useState, useEffect } from "react";
import axios from "../../helpers/axios";
import { Starship } from "../../types/starships";
import { Link } from "react-router-dom";
export default function Home() {
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("starships");
        setStarships(data.results);
        console.log("here");
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Starships</h2>
      <ul>
        {starships.map((starship) => {
          const starshipId = starship.url.split("/");
          return (
            <Link to={`/people/${starshipId[5]}`}>
              <li>{starship.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
