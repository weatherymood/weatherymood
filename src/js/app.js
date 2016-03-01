
require('../css/main.css');
require('../css/modules/aside.css');

var Geolocation = require('./geolocation.js');
var Weather     = require('./weather.js');
var Song        = require('./song.js');
var Background  = require('./background.js');
var Spinner     = require('./spinner.js');
var Moods       = require('./moods.js');

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

            var img = data.album.images[0].url;

            loadImg(img, function() {

                document.getElementById("song").innerHTML = '<a href="'+data.external_urls.spotify+'" id="card"><img src="'+img+'"></a>';
                setTimeout(function(argument) {
                    document.getElementById("card").className += "flipped";
                    Background.setBackground(Moods.getClass(mood));
                }, 100)

            });

        })

    })

})





