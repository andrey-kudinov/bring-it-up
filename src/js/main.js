import { Video, MainSlider, MiniSlider, Difference, Form } from "./modules/index"

window.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider({
    container: '.page',
    buttons: '.next'
  })
  slider.render()

  const showUpSlider = new MiniSlider({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  })
  showUpSlider.init()

  const modulesSlider = new MiniSlider({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  })
  modulesSlider.init()

  const feedSlider = new MiniSlider({
    container: '.feed__slider',
    prev: '.feed .slick-prev',
    next: '.feed .slick-next',
    activeClass: 'feed__item-active'
  })
  feedSlider.init()

  const video = new Video('.showup .play', '.overlay')
  video.init()

  new Difference('.officerold', '.officernew', '.officer__card-item').init()

  const form = new Form('.form')
  form.init()
})
