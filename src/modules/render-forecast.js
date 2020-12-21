function renderForecast(weather) {
  const container = document.querySelector('.forecast-weather');
  if (!container) return;
  const forecastWeatherCut = weather.list;
  for (let el = 0; el < forecastWeatherCut.length; el+=8) {
    let day = new Date(forecastWeatherCut[el+1].dt_txt);
    const forecastWeath = document.createElement('div');  
    forecastWeath.innerHTML = `
    <div class = 'week'>${day.toDateString()} </div> 
    <div>${day.getHours()}:00</div>
    <div><img src='./img/${forecastWeatherCut[el+1].weather[0].icon}.png'></img></div>
    <div>${Math.floor(forecastWeatherCut[el+1].main.temp)} °C </div>
    `;
    // const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // let weekDay = day.getDay();
    // <div class = 'week'>${week[weekDay]}, ${day.getDate()}.${day.getMonth() + 1} </div> 
    container.append(forecastWeath);
  }
}
export default renderForecast;
