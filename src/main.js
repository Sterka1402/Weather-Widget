import getWeather from './modules/get-weather-async';

window.addEventListener('load', () => {
  const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Mogilev,by&units=metric&appid=4bed3ee902539e73a03dc1243f44bff9';

  getWeather(weatherUrl);
});
