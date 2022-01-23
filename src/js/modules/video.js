export class Video {
  constructor(triggers, overlay) {
    this.buttons = document.querySelectorAll(triggers)
    this.overlay = document.querySelector(overlay)
    this.close = this.overlay.querySelector('.close')
  }

  create(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: String(url),
    })

    this.overlay.style.display = 'flex'
    console.log(this.player, url);
  }

  bindTriggers() {
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          this.overlay.style.display = 'flex'
        } else {
          const path = button.getAttribute('data-url')
          this.create(path)
        }
       
      })
    })
  }

  bindClose() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none'
      this.player.stopVideo()
    })
  }

  init() {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    this.bindTriggers()
    this.bindClose()
  }
}
