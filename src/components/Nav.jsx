import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/kweather.ico";
import SearchBar from "./SearchBar.jsx";


function Nav({ onSearch }) {
  return (
    <nav className="inline-grid grid-cols-4 content-center bg-gray-300">
      <div className="col-start-1 align-items-center">
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
      <div className="col-end-5 col-span-2">
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
