import renderWeather from './render-today';

function getWeather() {
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
        console.log(weather);
        resolve(weather);
      }
    };

    xhr.onerror = () => {
      reject(new Error('Network error'));
    };
  });

  const getJSON = getHttp('https://api.openweathermap.org/data/2.5/forecast?q=Mogilev,by&units=metric&appid=4bed3ee902539e73a03dc1243f44bff9');
  getJSON
    .then((weather) => renderWeather(weather))
    .catch((err) => console.log(err))
    .finally(() => console.log('Promise is fullfiled'));
}
export default getWeather;
