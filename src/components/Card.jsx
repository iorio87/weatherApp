import React from "react";
import { Link } from "react-router-dom";

export default function Card({ 
  name,
  img,
  onClose,
  id,
  temp,
  sensacion,
  nubosidad
}) {
  return (  

    <div className="container m-3">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
          <div id="closeIcon" className="flex flex-col-reverse bg-red-700 text-white w-6 rounded-md justify-center">
            <button onClick={onClose} className="justify-center">
              X
            </button>
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className="font-bold text-gray-600 text-center text-lg">{name}</h1>
            </div>
            <div className="my-6">
              <div className="flex flex-row space-x-4 items-center">
                <div id="icon">
                  <span>
                    <img
                      className=""
                      src={
                        "http://openweathermap.org/img/wn/" + img + "@2x.png"
                      }
                      width="100"
                      height="100"
                      alt=""
                    />
                  </span>
                </div>
                <div id="temp">
                  <h4 className="text-4xl">{temp}&deg;C</h4>
                  <p className="text-xs text-gray-500">
                    Sensacion Termica {sensacion}&deg;C
                  </p>
                  <p className="text-xs text-gray-500">
                    Nubosidad {nubosidad}%
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
              <Link
                to={`/ciudad/${id}`}
                className="text-indigo-600 text-xs font-medium"
              >
                <h5 classNameName="card-title text-secondary">Ver mas...</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
