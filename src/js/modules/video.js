export class Video {
  constructor(triggers, overlay) {
    this.buttons = document.querySelectorAll(triggers)
    this.overlay = document.querySelector(overlay)
    this.close = this.overlay.querySelector('.close')
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
  }

  create(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: String(url),
      events: {
        onStateChange: this.onPlayerStateChange
      }
    })

    this.overlay.style.display = 'flex'
  }

  onPlayerStateChange(state) {
    try {
      const blockedElement = this.activeButton.closest(
        '.module__video-item'
      ).nextElementSibling
      const playButton = this.activeButton.querySelector('svg').cloneNode(true)
      const playCircle = blockedElement.querySelector('.play__circle')
      const playText = document.querySelector('.play__text')
      if (state.data === 0 && playCircle.classList.contains('closed')) {
        playCircle.classList.remove('closed')
        blockedElement.querySelector('svg').remove()
        playCircle.appendChild(playButton)
        playText.textContent = 'play video'
        playText.classList.remove('attention')
        blockedElement.style.opacity = 1
        blockedElement.style.filter = 'none'

        blockedElement.setAttribute('data-disabled', false)
      }
    } catch (error) {}
  }

  bindTriggers() {
    this.buttons.forEach((button, index) => {
      try {
        const blockedElement = button.closest(
          '.module__video-item'
        ).nextElementSibling

        if (index % 2 === 0) {
          blockedElement.setAttribute('data-disabled', true)
        }
      } catch (error) {}

      button.addEventListener('click', () => {
        if (
          !button.closest('.module__video-item') ||
          button
            .closest('.module__video-item')
            .getAttribute('data-disabled') !== 'true'
        ) {
          this.activeButton = button

          if (document.querySelector('iframe#frame')) {
            this.overlay.style.display = 'flex'
            if (this.path !== button.getAttribute('data-url')) {
              this.path = button.getAttribute('data-url')
              this.player.loadVideoById({ videoId: this.path })
            }
          } else {
            this.path = button.getAttribute('data-url')
            this.create(this.path)
          }
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
    if (this.buttons.length) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      this.bindTriggers()
      this.bindClose()
    }
  }
}
