
require('../css/modules/song.css');

var axios = require('../../node_modules/axios');

var Song = {

  getSong: (cb, mood) => {

    var config = {
      url: "https://api.spotify.com/v1/search?q="+mood+"&type=track&limit=50"
    }

    axios.get(config.url)
      .then(function (response) {

        // var limit = response.data.playlists.items.length;
        var limit = response.data.tracks.items.length;
        var randomnumber = Math.floor(Math.random() * (0 - limit + 1)) + limit;

        cb(response.data.tracks.items[randomnumber]);

      })
      .catch(function (response) {
        console.log(response);
      });

  }

};

module.exports = Song;