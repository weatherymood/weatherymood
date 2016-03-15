export default class Preloader {

  show(){
    let p = document.getElementById('preloader')
    p.className = "active"
  }

  remove(cb){

    let flag = false
    let p = document.getElementById('preloader')

    p.className = ""

    p.addEventListener('transitionend', (event) => {
      if (!flag){
        cb()
      }
      flag = true
    }, false );

  }

}
