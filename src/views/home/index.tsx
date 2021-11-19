import React, { useState, useEffect } from "react";
import axios from "axios";
import { People, PeopleResponse } from "../../types/people";
import { homeTabs as tabs } from "../../constants/tabs";
import { Link, Outlet } from "react-router-dom";
export default function Home() {
  useEffect(() => {}, []);

  return (
    <div>
      <h1>StarWars Wiki</h1>
      <nav>
        <ul>
          {tabs.map((tab) => {
            return (
              <Link to={`/${tab.value}`} key={tab.value}>
                <li>{tab.label}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
