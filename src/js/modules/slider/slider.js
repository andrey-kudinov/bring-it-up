export class Slider {
  constructor({page = '', buttons = '', next = '', prev = ''} = {}) {
    this.page = document.querySelector(page)
    this.slides = this.page.children
    this.buttons = document.querySelectorAll(buttons)
    this.slideIndex = 1
  }
}