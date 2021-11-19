import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Vehicle } from "../types/vehicles";
import { Link } from "react-router-dom";

export default function VehiclesCard({ urls }: { urls: string[] }) {
  const [vehicles, setVehicles] = useState<Vehicle[] | null>(null);

  useEffect(() => {
    (async () => {
      const requests: Promise<AxiosResponse<any, any>>[] = [];

      urls.forEach((url) => {
        requests.push(axios.get(url));
      });

      const responses = await Promise.all(requests);

      const vehicles = responses.map((response) => response.data);

      setVehicles(vehicles);
    })();
  }, []);

  return (
    <div>
      <h3>Vehicles</h3>
      {vehicles ? (
        <div>
          {vehicles.map((vehicle) => {
            const id = vehicle.url.split("/")[5];
            return (
              <Link to={`/vehicles/${id}`} key={`vehicle-${id}`}>
                <div>
                  <h3>{vehicle.name}</h3>
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
