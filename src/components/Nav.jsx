import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/kweather.ico";
import SearchBar from "./SearchBar.jsx";


function Nav({ onSearch }) {
  return (
    <nav className="sm:inline-grid sm:grid-cols-7 content-center bg-gray-100 rounded-md gap-3">
      <div className="col-start-1 sm:col-span-3 xl:col-span-2 align-items-center sm:ml-2">
        <Link to="/">
          <span className="sm:inline-grid grid-cols-1 sm:grid-cols-2 content-center pt-2">
            <img
              id="logoweather"
              src={Logo}
              width="30"
              height="30"
              className="sm:content-center mx-auto"
              alt=""
            />
            Weather App
          </span>
        </Link>
      </div>
      <div className="sm:col-span-4 sm:grid-cols-2 xl:col-span-5">
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
