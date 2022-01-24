import { Video } from "./modules/index"
import { MainSlider } from "./modules/slider/slider-main"

window.addEventListener('DOMContentLoaded', () => {
  const mainSliderArgs = {
    page: '.page',
    buttons: '.next'
  }
  const slider = new MainSlider(mainSliderArgs)
  slider.render()

  const video = new Video('.showup .play', '.overlay')
  video.init()
})
