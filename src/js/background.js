import style from '../css/modules/background.css'

export default class Background {

  setBackground(mood){
    document.getElementById("background-active").className += mood
  }

}
