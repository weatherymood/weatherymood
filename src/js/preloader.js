export default class Preloader {

  remove(){

    let p = document.getElementById('preloader')
    p.className = ""
    // p.addEventListener('webkitTransitionEnd', (event) => {
    //   p.parentNode.removeChild(p);
    // }, false );

  }

  show(){
    let p = document.getElementById('preloader')
    p.className = "active"
  }

}
