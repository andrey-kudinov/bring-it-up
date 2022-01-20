export class Slider {
  constructor(page, buttons) {
    this.page = document.querySelector(page)
    this.slides = this.page.children
    this.buttons = document.querySelectorAll(buttons)
  }

  render() {
    console.log(this.page, this.slides)
  }
}