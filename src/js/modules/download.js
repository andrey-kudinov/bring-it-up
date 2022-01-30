export class Download {
  constructor(triggers) {
    this.buttons = document.querySelectorAll(triggers)
    this.path = 'src/assets/img/mainbg.jpg'
  }

  downloadItem(path) {
    const link = document.createElement('a')
    link.setAttribute('href', path)
    link.setAttribute('download', 'mainbg')
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  init() {
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.downloadItem(this.path)
      })
    })
  }
}