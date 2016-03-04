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
    window.open(
      `https://twitter.com/share?url=${escape(url)}&text=I'm listing ${name} playlist, via @WeatheryMood`,
      "Share playlist via @WeatheryMood @spotify",
      "menubar=no,toolbar=no,resizable=yes,height=253,width=600",
    )
    return false;
  }
}
