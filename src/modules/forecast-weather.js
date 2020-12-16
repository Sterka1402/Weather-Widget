function forecastWeath(weather) {
  const container = document.querySelector('.forecast-weather');
  if (!container) return;
  weather.list.forEach((el) => {
    if (el.dt_txt.slice(11,13) === '12') {
      const forecastWeath = document.createElement('div');  
      forecastWeath.innerHTML = `
        <div>${el.dt_txt}</div>
        <div><img src='./img/${el.weather[0].icon}.png'></img></div>
        <div>${Math.floor(el.main.temp)} °C </div>
      `;
      container.append(forecastWeath);
    }
  });

}
export default forecastWeath;
