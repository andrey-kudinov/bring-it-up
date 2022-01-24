import { Slider } from "./slider";

export class MainSlider extends Slider {
  constructor(page, buttons) {
    super(page, buttons)
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1
    }

    if (n < 1) {
      this.slideIndex = this.slides.length
    }

    try {
      this.toast.style.opacity = 0
      if (n === 3) {
        this.toast.classList.add('animated')
        setTimeout(() => {
          this.toast.style.opacity = 1
          this.toast.classList.add('slideInUp')
        }, 3000);
      } else {
        this.toast.classList.remove('slideInUp')
      }
    } catch (error) {}

    Array.from(this.slides).forEach(slide => {
      slide.style.display = 'none'
    })

    this.slides[this.slideIndex - 1].style.display = 'block'
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n)
  }


  render() {
    try {
      this.toast = document.querySelector('.hanson')
    } catch (error) {}

    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.plusSlides(1)
      })

      button.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault()
        this.slideIndex = 1
        this.showSlides(this.slideIndex)
      })
    })

    this.showSlides(this.slideIndex)
  }
}