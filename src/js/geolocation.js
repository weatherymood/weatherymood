
export default class Geolocation {

  getPosition(cb){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.savePosition(position.coords.latitude + ',' + position.coords.longitude, cb);
      },
      (error) => {
        this.savePosition('21.40706,149.92483', cb);
      }
    );
  };

  savePosition(position, cb){
    localStorage.setItem("SWM_Position", position);
    cb();
  };

  checkPosition(cb){
    if (localStorage.getItem("SWM_Position") === null) {
      this.getPosition(cb);
    } else {
      cb();
    }
  }

};
