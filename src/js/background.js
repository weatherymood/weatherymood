
require('../css/modules/background.css');

var Background = {

  setBackground: (mood) => {
    document.getElementById("background-active").className += mood;
  }

};

module.exports = Background;