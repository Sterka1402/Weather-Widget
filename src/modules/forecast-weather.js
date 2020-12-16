function forecastWeath(weather) {
  const forecastWeath = document.querySelector('.forecast-weather');
  if (!forecastWeath) return;
  const day =  
  weather.weather.forEach(el =>
  forecastWeath.innerHTML = `
    <div>${(new Date().toLocaleDateString())}</div>
    <div><img src='../img/${el.icon}.png'></img></div>
    <div>${weather.main.temp} <sup>o</sup>C </div>
  `);
 
  // <div>${day.toLocaleDateString()}</div>
};
export default forecastWeath;