
import song from './song.js'
import moods from './moods.js'
import weather from './weather.js'
import background from './background.js'
import geolocation from './geolocation.js'
import preloader from './preloader.js'
import share from './share.js'

let Song  = new song()
let Moods  = new moods()
let Weather  = new weather()
let Background  = new background()
let Geolocation  = new geolocation()
let Preloader  = new preloader()
let Share  = new share()

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
            setTimeout(()=>{
                Preloader.remove()
            }, 0)
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
                console.log(data)
                d.addEventListener('click', (e) => {
                    if(e.target.id === 'shareFB' || e.target.id === "shareTW") {
                        const {external_urls, name, images} = data
                        e.target.id === 'shareFB' ? Share.shareFB(external_urls.spotify, name, images) : Share.shareTW(external_urls.spotify, name, images)
                    }
                })

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

                        d.getElementById("song-cover").innerHTML = `<div id="card"><img src="${track.cover}"></div>`
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

            }).catch(function (response) {
                console.log('err', response)
            })

        })
    })
} else {
    document.getElementById("app").className += 'offline'
}

