export default class Preloader {

  remove(){

    let p = document.getElementById('preloader')
    p.className += "loaded"
    p.addEventListener('webkitTransitionEnd', function(event) {
      p.parentNode.removeChild(p);
    }, false );

  }

}
