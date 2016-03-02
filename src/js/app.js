
import song from './song.js';
import moods from './moods.js';
import weather from './weather.js';
import background from './background.js';
import geolocation from './geolocation.js';

var Song  = new song();
var Moods  = new moods();
var Weather  = new weather();
var Background  = new background();
var Geolocation  = new geolocation();

var firstCall, secondCall, thirdCall;

var loadImg = (src, callback) => {

    var sprite = new Image();
    sprite.onload = callback;
    sprite.src = src;

};

firstCall = new Promise(function (resolve, reject) {

    Geolocation.checkPosition(function(){
        resolve();
    });

}).then(function(data){

    secondCall = new Promise(function (resolve, reject) {

        Weather.getWeather(function (data) {
            resolve(data);
        });

    }).then(function (data) {

        var mood = data;

        thirdCall = new Promise(function (resolve, reject) {

            Song.getSong(function (data) {
                resolve(data);
            }, mood)

        }).then(function (data) {

            console.log(data)

            var track = {
                uri: data.uri,
                // name: data.name,
                // album: data.album.name,
                // cover: data.album.images[0].url
            }
            var iframe = '<iframe id="card" src="https://embed.spotify.com/?uri='+track.uri+'&view=coverart" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
            document.getElementById("song-cover").innerHTML = iframe;

            document.getElementById("card").addEventListener('load', function() {
                document.getElementById("card").className += "flipped";
                document.getElementById("song-details").className += "active";
                Background.setBackground(Moods.getClass(mood));
            });

            // loadImg(track.cover, function() {

            //     var iframe = '<iframe id="card" src="https://embed.spotify.com/?uri='+track.uri+'" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';

            //     document.getElementById("song-cover").innerHTML = iframe;

            //     // document.getElementById("song-cover").innerHTML = '<a href="'+track.uri+'" id="card"><img src="'+track.cover+'"></a>';

            //     setTimeout(function() {
            //         document.getElementById("card").className += "flipped";
            //     }, 100);
            //     document.getElementById("song-album").innerHTML = track.album;
            //     document.getElementById("song-name").innerHTML = track.name;
            //     setTimeout(function () {
            //         Background.setBackground(Moods.getClass(mood));
            //         document.getElementById("song-details").className += "active";
            //     }, 500)

            // });

        })

    })

})





