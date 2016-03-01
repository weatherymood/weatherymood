
var Moods = require('./moods.js');
var axios = require('../../node_modules/axios');

var Weather = {

  api: {
    key: 'd34287f4a61b20a089415d7d0f112bc2',
    url: 'http://api.openweathermap.org/data/2.5/weather?'
  },

  getWeather: (cb) => {

    var coords = localStorage.getItem("SWM_Position").split(","),
        url = Weather.api.url + 'lat=' + coords[0] + '&lon=' + coords[1] + '&appid=' + Weather.api.key;

    axios.get(url)
      .then(function (response) {
        cb(response.data.weather[0].id);
      })
      .catch(function (response) {
      });

  }

};

module.exports = Weather;