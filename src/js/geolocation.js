
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

  retrievePosition: (cb) => {

    cb();
    return localStorage.getItem("SWM_Position");

  },

  savePosition: (position, cb) => {

    localStorage.setItem("SWM_Position", position);
    cb();
    return position;

  },

  checkPosition: (cb) => {

    if (localStorage.getItem("SWM_Position") === null) {
      return Geolocation.getPosition(cb);
    } else {
      return Geolocation.retrievePosition(cb);
    }

  }
};

module.exports = Geolocation;

