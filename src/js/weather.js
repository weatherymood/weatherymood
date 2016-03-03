
import axios from 'axios';

export default class Weather {

  constructor(api_key, api_url) {
    this.api_key = 'd34287f4a61b20a089415d7d0f112bc2';
    this.api_url = 'http://api.openweathermap.org/data/2.5/weather?';
  }

  getWeather(cb){

    var coords = localStorage.getItem("SWM_Position").split(","),
        url = this.api_url + 'lat=' + coords[0] + '&lon=' + coords[1] + '&units=metric&appid=' + this.api_key;

    axios.get(url)
        .then(function (response) {

          console.log(response)
          var icon = response.data.weather[0].main.toLowerCase();
          var temp = Math.round(response.data.main.temp);

          document.getElementsByClassName("icon-"+icon)[0].className += " active";
          document.getElementById("info-meteo-text").innerHTML = temp+' °C';
          document.getElementById("info-meteo").className += " active";
          cb(response.data.weather[0].id);
        })
        .catch(function (response) {
          console.log('error')
        });
  }

}