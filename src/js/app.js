
// Main CSS
require('../css/main.css');

var Geolocation = require('./geolocation.js');
var Weather =     require('./weather.js');
var Song =        require('./song.js');
var Spinner =     require('./spinner.js');


var firstCall = new Promise(function (resolve, reject) {

    var coords = Geolocation.checkPosition(function(){
        resolve();
    });

})

firstCall.then(function(data){

    var secondCall = new Promise(function (resolve, reject) {

        Weather.getWeather(function (data) {
            resolve(data);
        });

    }).then(function (data) {

        var mood = data;

        var thirdCall = new Promise(function (resolve, reject) {
            Song.getSong(function (data) {
                resolve(data);
            }, mood)
        }).then(function (data) {
            document.getElementById("app").innerHTML = '<a href="'+data.external_urls.spotify+'"><img src="'+data.images[0].url+'"></a>';
        })

    })
})





