import { Slider, Video } from "./modules/index"

window.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.page', '.next')
  slider.render()

  const video = new Video('.showup .play', '.overlay')
  video.init()
})
