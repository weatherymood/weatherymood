export default class Preloader {

  constructor() {
    this.p = document.getElementById('preloader')
    this.pbg = document.getElementById('preloader-bg')
    this.limit = 10 // number of custom bgs gradients
    this.randomnumber = Math.floor(Math.random() * (this.limit))
    this.flag = false
  }

  show(cb){
    this.p.className += `bg-${this.randomnumber} active`
    document.getElementById("background-active").className = `bg-${this.randomnumber}`
    this.p.addEventListener("transitionend", () => {
      cb()
    }, false);
  }

  remove(cb){

    setTimeout(()=>{


      this.p.classList.add("active-loaded")

      this.p.addEventListener("transitionend", () => {

        if (!this.flag){
          this.pbg.className = "loaded"
          this.flag = true
          cb()
        }
      }, false);

    }, 0)

  }

}
