
var Geolocation = {

  getPosition: (cb) => {
    console.log('--- entro in getPosition')
    navigator.geolocation.getCurrentPosition(
      (position) => {
        Geolocation.savePosition(position.coords.latitude + ',' + position.coords.longitude, cb);
      },
      (error) => {
        console.log('errorrrrrr')
      }
    );
  },

  retrievePosition: (cb) => {

    console.log('--- recupero position da localStorage')

    cb();
    return localStorage.getItem("SWM_Position");
  },

  savePosition: (position, cb) => {

    console.log('--- salvo position in localStorage')

    localStorage.setItem("SWM_Position", position);
    cb();
    return position;
  },

  checkPosition: (cb) => {

    console.log('--- entro checkPosition')

    if (localStorage.getItem("SWM_Position") === null) {
      return Geolocation.getPosition(cb);
    } else {
      return Geolocation.retrievePosition(cb);
    }

  }
};

module.exports = Geolocation;