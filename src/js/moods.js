export default class Moods {

  constructor(codes) {
    this.codes = [
      {
        'codes': [701,711,800],
        'class': 'clear',
        'keywords': [
          'wake+up+happy',
          'sunny',
          'sunsets',
          'sunshine'
        ]
      },
      {
        'codes': [801,802,803,804],
        'class': 'clouds',
        'keywords': [
          'cloudy'
        ],
      },
      {
        'codes': [701,711,721,731,741,751,761,762,771,781],
        'class': 'clouds',
        'keywords': [
          'foggy',
        ],
      },
      {
        'codes': [500,501,502,503,504,511,520,521,522,531,300,301,302,310,311,312,313,314,321],
        'class': 'rain',
        'keywords': [
          'rainy'
        ]
      },
      {
        'codes': [200,201,202,210,211,212,221,230,231,232],
        'class': 'thunderstorm',
        'keywords': [
          'stormy',
          'dark',
          'rock'
        ]
      },
      {
        'codes': [600,601,602,611,612,615,616,620,621,622],
        'class': 'snow',
        'keywords': [
          'snowboarding',
          'snow+day',
          'snow',
          'acoustic+winter',
        ]
      },
      {
        'codes': [900,901,902,903,904,905,906],
        'class': 'extreme',
        'keywords': ['metal', 'extreme', 'rock'],
      }
    ]
  }

  getKeyword(keyword) {

    let limit, randomnumber

    for (let i=0; i<this.codes.length; i++) {

      if (this.codes[i].codes.indexOf(keyword) > -1) {
        limit = this.codes[i].keywords.length
        randomnumber = Math.floor(Math.random() * (limit))
        console.log('The keyword is:', this.codes[i].keywords[randomnumber])
        return this.codes[i].keywords[randomnumber]
      }
    }
  }

  getClass(keyword) {

    for (let i=0; i<this.codes.length; i++){
      if (this.codes[i].codes.indexOf(keyword) > -1){
        return this.codes[i].class;
      }
    }
  }
}
