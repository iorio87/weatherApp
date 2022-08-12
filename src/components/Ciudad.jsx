import React from "react";
import { Link } from "react-router-dom";
import {TiWeatherSunny, TiWeatherWindy, TiWeatherCloudy, TiWeatherPartlySunny} from 'react-icons/ti'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'


export default function Ciudad({ city }) {
  
  if (city) {
    return (    

      <div class="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto pt-5">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          {city.name}
        </h5>
        

        <ul role="list" class="my-7 space-y-5">
          <li class="flex space-x-3">
            
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 inline-flex gap-2">
              <TiWeatherSunny className="text-yellow-700"/> Temperatura: {city.temp}ºC
            </span>
          </li>
          <li class="flex space-x-3">
           
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 inline-flex gap-2">
              <TiWeatherPartlySunny className="text-lg"/> Cielo: {city.weather}
            </span>
          </li>
          <li class="flex space-x-3">
            
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 inline-flex gap-2">
              <TiWeatherWindy className="text-lg"/> Viento: {city.wind} km/h
            </span>
          </li>
          <li class="flex space-x-3">
          
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 inline-flex gap-2">
              <TiWeatherCloudy className="text-lg text-gray-500"/> Nubosidad: {city.clouds}%
            </span>
          </li>
          <li class="flex space-x-3">
           
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400  inline-flex gap-2">
              <AiFillMinusCircle className="text-lg text-blue-700"/> Minima: {city.min}º
            </span>
          </li>
          <li class="flex space-x-3">
           
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 inline-flex gap-2">
              <AiFillPlusCircle className="text-lg text-red-700"/> Maxima: {city.max}º
            </span>
          </li>
        </ul>
        <Link to="/">
        <button
          type="button"
          class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Home
        </button>
        </Link>
      </div>
    );
  } else return <p>No hay ciudad para mostrar</p>;
}
