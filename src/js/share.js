export default class Sharer {
  shareFB(url, name, images) {
    FB.ui({
      method: 'share',
      href: url,
    }, (response) => {
      console.log(response)
    })
  }

  shareTW(url, name, images) {

    let namePlaylist = name.replace('&', 'and');

    if (namePlaylist.length > 60){
      namePlaylist = namePlaylist.substring(0,namePlaylist.length-3)
      namePlaylist = namePlaylist + '...'
    }

    let pos = {
      left: screen.width / 2 - 600 / 2,
      top: screen.height / 2 - 260 / 2
    };

    window.open(
      `https://twitter.com/share?url=${escape(url)}&text=I'm listening "${namePlaylist}" playlist, via @WeatheryMood`,
      "Share playlist via @WeatheryMood @spotify",
      `menubar=no,toolbar=no,resizable=yes,height=253,width=600,left=${pos.left},top=${pos.top}`,
    )
    return false;
  }
}
