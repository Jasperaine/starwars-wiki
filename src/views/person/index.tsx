import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../helpers/axios";
import { People as PersonType } from "../../types/people";
import HomeWorldCard from "../../components/HomeWorldCard";
import FilmsCard from "../../components/FilmsCard";
import VehiclesCard from "../../components/VehiclesCard";
import StarshipsCard from "../../components/StarshipsCard";
import SpeciesCard from "../../components/SpeciesCard";

export default function Person() {
  const { personId } = useParams();
  const [person, setPerson] = useState<PersonType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await axios.get(`/people/${personId}`);
      setPerson(data.data);
    })();
  }, []);
  return (
    person && (
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>{person.name}</h2>
        <div>
          <div id="gender">Gender: {person.gender}</div>
          <div id="height">Height: {person.height}cm</div>
          <div id="mass">Mass: {person.mass}kg</div>
          <div id="hair-color">Hair color: {person.hair_color}</div>
          <div id="eye-color">Eye color: {person.eye_color}</div>
          <div id="birth-year">Birth year: {person.birth_year}</div>
        </div>
        <HomeWorldCard url={person.homeworld} />
        <FilmsCard urls={person.films} />
        <VehiclesCard urls={person.vehicles} />
        <StarshipsCard urls={person.starships} />
        <SpeciesCard urls={person.species} />
      </div>
    )
  );
}
