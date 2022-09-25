function Icons(icon) {
  switch (icon) {
    case "Thunderstorm":
      icon = new URL("../assets/thunderstorms-rain.svg", import.meta.url).href;
      break;
    case "Drizzle":
      icon = new URL("../assets/drizzle.svg", import.meta.url).href;
      break;
    case "Rain":      
      icon = new URL("../assets/rain.svg", import.meta.url).href;
      break;
    case "Snow":
      icon = new URL("../assets/snowy.svg", import.meta.url).href;
      break;
    case "Clear":
      icon = new URL("../assets/clear-day.svg", import.meta.url).href;
      break;
    case "Atmosphere":
      icon = new URL("../assets/weather.svg", import.meta.url).href;
      break;
    case "Clouds":
      icon = new URL("../assets/cloudy.svg", import.meta.url).href;
      break;
    case "Fog":
      icon = new URL("../assets/fog.svg", import.meta.url).href;
      break;
    case "Haze":
      icon = new URL("../assets/haze.svg", import.meta.url).href;
      break;
    case "Smoke":
      icon = new URL("../assets/smoke.svg", import.meta.url).href;
      break;
    default:
      icon = new URL("../assets/clear-day.svg", import.meta.url).href;
  }
  return icon;
}

export default Icons;
