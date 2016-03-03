
import song from './song.js'
import moods from './moods.js'
import weather from './weather.js'
import background from './background.js'
import geolocation from './geolocation.js'

let Song  = new song()
let Moods  = new moods()
let Weather  = new weather()
let Background  = new background()
let Geolocation  = new geolocation()

let firstCall, secondCall, thirdCall
let d = document

let isIframe = false

let loadImg = (src, callback) => {

    let sprite = new Image()
    sprite.onload = callback
    sprite.src = src

}

if (navigator.onLine){
    firstCall = new Promise(function (resolve, reject) {

        Geolocation.checkPosition(function(){
            resolve()
        })

    }).then(function(data){

        secondCall = new Promise(function (resolve, reject) {

            Weather.getWeather(function (data) {
                resolve(data)
            })

        }).then(function (data) {

            let mood = data

            thirdCall = new Promise(function (resolve, reject) {

                Song.getSong(function (data) {
                    resolve(data)
                }, mood)

            }).then(function (data) {

                if (isIframe) {
                    let track = {
                        uri: data.uri,
                    }
                    let iframe = `<iframe id="card" src="https://embed.spotify.com/?uri=${track.uri}&view=coverart" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>`

                    d.getElementById("song-cover").innerHTML = iframe

                    d.getElementById("card").addEventListener('load', function() {
                        d.getElementById("card").className += "flipped"
                        d.getElementById("song-details").className += "active"
                        Background.setBackground(Moods.getClass(mood))
                    })
                } else {

                    let track = {
                        uri: data.uri,
                        name: data.name,
                        cover: data.images[0].url
                    }

                    loadImg(track.cover, function() {

                        d.getElementById("song-cover").innerHTML = `<a href="${track.uri}'" id="card"><img src="${track.cover}"></a>`
                        d.getElementById("song-play").innerHTML = `<a href="${track.uri}" class="play">play on spotify</a>`
                        d.getElementById("song-name").innerHTML = track.name

                        setTimeout(function() {
                            d.getElementById("card").className += "flipped"
                        }, 100)

                        setTimeout(function () {
                            Background.setBackground(Moods.getClass(mood))
                            d.getElementById("song-details").className += "active"
                        }, 500)

                    })
                }

            })

        })
    })
} else {
    document.getElementById("app").className += 'offline'
}

