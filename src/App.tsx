import React from "react";
import Home from "./views/home";
import People from "./views/people";
import Person from "./views/person";
import Starships from "./views/starships";
import Vehicles from "./views/vehicles";
import Species from "./views/species";
import Planets from "./views/planets";
import Films from "./views/films";
import About from "./views/about";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<About />} />
            <Route path="people" element={<People />} />
            <Route path="people/:personId" element={<Person />} />
            <Route path="starships" element={<Starships />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="species" element={<Species />} />
            <Route path="films" element={<Films />} />
            <Route path="planets" element={<Planets />} />
            <Route path="people/:personId" element={<Person />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
