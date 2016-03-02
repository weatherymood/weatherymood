
export default class Sharer {

  constructor(trigger, width, height, pos, url) {
    this.trigger = trigger;
    this.width = width;
    this.height = height;
    this.pos = pos;
    this.url = url
  }

  openPopup(url, width, height){
    if (!url) return;
    width = width ? width : 600;
    height = height ? height : 600;
    pos = {
        left: screen.width / 2 - width / 2,
        top: screen.height / 2 - height / 2
    };
    window.open(url, "Share", "width=" + width + ",height=" + height + ",left=" + pos.left + ",top=" + pos.top);
  }

  twitterShare(url) {
    this.openPopup(url, 690, 300)
  }

  facebookShare(url) {
    this.openPopup(url, 690, 300)
  }

  init() {

    console.log('init');

    // $shCt.on("click", function(evt) {

    //     var $this = $(this);

    //     url = $this.attr("href");
    //     evt.preventDefault();
    //     evt.stopPropagation();
    //     switch (true) {
    //         case /facebook\.com/g.test(url):
    //             _facebookShare(url);
    //             break;
    //         case /twitter\.com/g.test(url):
    //             _twitterShare(url);
    //             break;
    //         default:
    //             return false;
    //     }
    // });

  }

};
