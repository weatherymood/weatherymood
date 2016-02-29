
// Main CSS
require('../css/main.css');

var Geolocation = require('./geolocation.js');
var Weather =     require('./weather.js');
var Spinner =     require('./spinner.js');

var firstCall = new Promise(function (resolve, reject) {

    var coords = Geolocation.checkPosition(function(){
        resolve();
    });

    // console.log('position', coords);
})

firstCall.then(function(data){
    console.log('--- posizione ricevuta, inizio chiamata a weather')
    var secondCall = new Promise(function (resolve, reject) {
        Weather.getWeather(function (data) {
            resolve();
        });
    })
})


const WHO = 'JS';

// const latlong = Geolocation.getPosition();
let greeter = (who) => 'Hello from ' + who + '!';


document.getElementById('app').appendChild(
    document.createTextNode(greeter(WHO))
);
