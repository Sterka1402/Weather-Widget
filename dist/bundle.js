(()=>{"use strict";const e=function(e){const n=document.querySelector(".current-weather");n&&(e.weather.forEach((o=>n.innerHTML=`\n    <img src='../img/${o.icon}.png'></img>\n    <p>${e.name}, ${e.sys.country}</p>\n    <h4>${e.main.temp} <sup>o</sup>C </h4>\n    <p> Wind now is ${e.wind.speed} m/s.</p>\n    `)),function(e){const n=document.querySelector(".forecast-weather");n&&e.weather.forEach((o=>n.innerHTML=`\n    <div>${(new Date).toLocaleDateString()}</div>\n    <div><img src='../img/${o.icon}.png'></img></div>\n    <div>${e.main.temp} <sup>o</sup>C </div>\n  `))}(e))};window.addEventListener("load",(()=>{new Promise(((e,n)=>{const o=new XMLHttpRequest;o.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Mogilev,by&units=metric&appid=4bed3ee902539e73a03dc1243f44bff9",!0),o.send(),o.onload=()=>{if(200!==o.status)n(new Error("Error occured"));else{const n=o.response,r=JSON.parse(n);console.log(r),e(r)}},o.onerror=()=>{n(new Error("Network error"))}})).then((n=>e(n))).catch((e=>console.log(e))).finally((()=>console.log("Promise is fullfiled")))}))})();