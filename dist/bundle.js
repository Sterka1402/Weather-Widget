(()=>{"use strict";const e=async function(e){try{const n=await fetch(e),t=await n.json();(function(e){const n=document.querySelector(".current-weather");if(!n)return;const{icon:t}=e.list[0].weather[0];n.innerHTML=`\n  <p class='city'>${e.city.name}, ${e.city.country}.</p> \n  <img src='./img/${t}.png'></img>\n  <p>${(new Date).toDateString()}</p>\n  <h2>${Math.floor(e.list[0].main.temp)} °C </h2>\n  <p>Feels like ${Math.floor(e.list[0].main.feels_like)} °C<p>\n  <p> Wind now is ${Math.floor(e.list[0].wind.speed)} m/s.</p>\n  `})(t),function(e){const n=document.querySelector(".forecast-weather");if(!n)return;const t=e.list;for(let e=0;e<t.length;e+=8){const i=new Date(t[e+1].dt_txt),o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][i.getDay()],a=i.toDateString().slice(4,10),r=document.createElement("div");r.innerHTML=`\n    <div class = 'week'>${o}, ${a} </div> \n    <div>${i.getHours()}:00</div>\n    <div><img src='./img/${t[e+1].weather[0].icon}.png'></img></div>\n    <div>${Math.floor(t[e+1].main.temp)} °C </div>\n    `,n.append(r)}}(t)}catch(e){console.log(new Error("Sorry for unconvenience. Something happened wrong"))}};window.addEventListener("load",(()=>{e("https://api.openweathermap.org/data/2.5/forecast?q=Mogilev,by&units=metric&appid=4bed3ee902539e73a03dc1243f44bff9")}))})();