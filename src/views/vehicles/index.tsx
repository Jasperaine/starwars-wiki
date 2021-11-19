import React, { useState, useEffect } from "react";
import axios from "../../helpers/axios";
import { People } from "../../types/people";
import { Link } from "react-router-dom";
export default function Home() {
  const [people, setPeople] = useState<People[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("people");
        setPeople(data.results);
        console.log("here");
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map((person) => {
          const personId = person.url.split("/");
          console.log(personId);
          return (
            <Link to={`/people/${personId[5]}`}>
              <li>{person.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
