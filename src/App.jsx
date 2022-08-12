import { useState } from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Ciudad from "./components/Ciudad";
import Footer from "./components/Footer";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          console.log(recurso);
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            sensacion: Math.round(recurso.main.feels_like),
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          // me fijo si esta repetido para no agregar de vuelta la ciudad
          let isIn = cities.find((city) => city.id === ciudad.id);
          isIn
            ? setCities([...cities])
            : setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className="bg-[url('./img/fondo2.jpg')] bg-cover bg-fixed h-fit min-h-screen p-0">
      <Route
        exact path='/'
        render={() => <Nav onSearch={onSearch} />}
      />

      <Route
        exact path='/'
        render={() => <Cards cities={cities} onClose={onClose} />}
      />

      <Route
        exact
        path='/ciudad/:ciudadId'
        render={({ match }) => <Ciudad
          city={onFilter(match.params.ciudadId)}
        />}
      />
      <Route
        path='/about'
        component={About}
      />

      <Route
        exact='true'
        path='/'
        component={Footer}
      />
      
    </div>
  );
}

export default App;
