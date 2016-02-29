
var Geolocation = {

  getPosition: (cb) => {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        Geolocation.savePosition(position.coords.latitude + ',' + position.coords.longitude, cb);
      },
      (error) => {
      }
    );

  },

  savePosition: (position, cb) => {

    localStorage.setItem("SWM_Position", position);
    cb();

  },

  checkPosition: (cb) => {

    if (localStorage.getItem("SWM_Position") === null) {
      Geolocation.getPosition(cb);
    } else {
      cb();
    }

  }
};

module.exports = Geolocation;

