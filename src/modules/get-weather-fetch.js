import renderWeather from "./render-today";
function getWeather() {
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=Mogilev,by&units=metric&appid=4bed3ee902539e73a03dc1243f44bff9')
  .then(response => response.json())
  .then(weather => renderWeather(weather))
  .catch(() => console.log(new Error('Sorry for unconvenience. Something happened wrong')))
}

export default getWeather