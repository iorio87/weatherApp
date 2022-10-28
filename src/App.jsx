import { useState } from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Ciudad from "./components/Ciudad";
import Footer from "./components/Footer";
import {ApiFetch} from './components/services'


function App() {
  const [cities, setCities] = useState([]);
  
  async function onSearch(ciudad) {
    const res = await ApiFetch(ciudad)    

    if (res.main !== undefined) {       
      const ciudad = {
        min: Math.round(res.main.temp_min),
        max: Math.round(res.main.temp_max),
        img: res.weather[0].icon,
        id: res.id,
        wind: res.wind.speed,
        temp: Math.round(res.main.temp),
        name: res.name,
        sensacion: Math.round(res.main.feels_like),
        weather: res.weather[0].main,
        clouds: res.clouds.all,
        latitud: res.coord.lat,
        longitud: res.coord.lon,
      };
      // me fijo si esta repetido para no agregar de vuelta la ciudad
      let isIn = cities.find((city) => city.id === ciudad.id);
      isIn
        ? setCities([...cities])
        : setCities(oldCities => [...oldCities, ciudad]);
    } else {
      alert("Ciudad no encontrada");
    }
  } 

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  function onClose(id, setCities) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
}

  return (
    <div className="bg-[url('./img/fondo2.jpg')] bg-cover bg-fixed h-fit min-h-screen p-0 ">
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
