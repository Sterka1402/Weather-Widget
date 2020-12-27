import renderWeather from './render-today';

async function getWeather() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Mogilev,by&units=metric&appid=4bed3ee902539e73a03dc1243f44bff9');
    const weather = await response.json();
    renderWeather(weather);
  } catch (err) {
    console.log(new Error('Sorry for unconvenience. Something happened wrong'));
  }
}

export default getWeather;
