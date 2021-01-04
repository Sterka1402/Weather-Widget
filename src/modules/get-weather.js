import renderForecast from './render-forecast';
import renderToday from './render-today';

function getWeather(weatherUrl) {
  const getHttp = (url) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status !== 200) {
        reject(new Error('Error occured'));
      } else {
        const result = xhr.response;
        const weather = JSON.parse(result);
        resolve(weather);
      }
    };

    xhr.onerror = () => {
      reject(new Error('Network error'));
    };
  });

  const getJSON = getHttp(weatherUrl);
  getJSON
    .then((weather) => renderToday(weather))
    .then((weather) => renderForecast(weather))
    .catch((err) => console.log(err))
    .finally(() => console.log('Promise is fullfiled'));
}
export default getWeather;
