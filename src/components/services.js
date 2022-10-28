const KEY = import.meta.env.VITE_API_KEY;

export function ApiFetch(ciudad) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((infoClima) => infoClima);
}




