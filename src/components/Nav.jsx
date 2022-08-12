import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/kweather.ico";
import SearchBar from "./SearchBar.jsx";


function Nav({ onSearch }) {
  return (
    <nav className="inline-grid grid-cols-4 xl:grid-cols-6 content-center bg-gray-300 rounded-md">
      <div className="col-start-1 align-items-center ml-2">
        <Link to="/">
          <span className="inline-grid grid-cols-2 content-center pt-2">
            <img
              id="logoHenry"
              src={Logo}
              width="30"
              height="30"
              className="content-center"
              alt=""
            />
            Weather App
          </span>
        </Link>
      </div>
      <div className="col-end-5 col-span-2  xl:col-end-7 xl:col-span-3">
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
