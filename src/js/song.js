import axios from 'axios'
import moods from './moods.js'

let Moods = new moods();

export default class Song {

  getSong(cb, mood){

    let keyword = Moods.getKeyword(mood)
    let config = {
      url: `https://api.spotify.com/v1/search?q=${keyword}&type=playlist&limit=50`
    }

    axios.get(config.url)
      .then((response) => {

        let limit = response.data.playlists.items.length
        let randomnumber = Math.floor(Math.random() * (0 - limit + 1)) + limit
        let playlist = response.data.playlists.items[randomnumber]
        console.log('The selected playlist is:', playlist)
        cb(playlist)

      })
      .catch((response) => {
        console.log('error', response)
      })
  }
}
