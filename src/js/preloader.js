export default class Preloader {

  show(){
    let p = document.getElementById('preloader')
    p.className = "active"
  }

  remove(cb){

    let flag = false
    let p = document.getElementById('preloader')
    let pbg = document.getElementById('preloader-bg')

    p.className = "active-loaded"


    p.addEventListener('transitionend', (event) => {
      if (!flag){
        pbg.className = "loaded"
        cb()
      }
      flag = true
    }, false );

  }

}
