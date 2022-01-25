export class Slider {
  constructor({
    container = null,
    buttons = null,
    next = null,
    prev = null,
    activeClass = '',
    animate = false,
    autoplay = false
  } = {}) {
    this.container = document.querySelector(container)
    this.slides = this.container.children
    this.buttons = document.querySelectorAll(buttons)
    this.prev = document.querySelector(prev)
    this.next = document.querySelector(next)
    this.activeClass = activeClass
    this.animate = animate
    this.autoplay = autoplay
    this.slideIndex = 1
  }
}
