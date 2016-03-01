
require('../css/modules/song.css');

import moods from './moods.js';

var Moods = new moods();
var axios = require('../../node_modules/axios');

export default class Song {

  getSong(cb, mood){
    var keyword = Moods.getKeyword(mood);
    var config = {
      url: "https://api.spotify.com/v1/search?q="+keyword+"&type=track&limit=50"
    }

    axios.get(config.url)
      .then(function (response) {

        var limit = response.data.tracks.items.length;
        var randomnumber = Math.floor(Math.random() * (0 - limit + 1)) + limit;

        cb(response.data.tracks.items[randomnumber]);

      })
      .catch(function (response) {
      });
  }
};