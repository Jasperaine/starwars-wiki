import React, { useEffect, useState } from "react";
import axios from "axios";
import { Planet } from "../types/planets";
import { Link } from "react-router-dom";

export default function HomeWorldCard({ url }: { url: string }) {
  const [homeWorld, setHomeWorld] = useState<Planet | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);
      setHomeWorld(data);
    })();
  });

  const personId = url.split("/")[5];

  return (
    homeWorld && (
      <div>
        <h3>Home world</h3>
        <Link to={`/planets/${personId}`}>
          <div>
            <h3>{homeWorld.name}</h3>
          </div>
        </Link>
      </div>
    )
  );
}
