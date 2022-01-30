export class ShowInfo {
  constructor(triggers) {
    this.buttons = document.querySelectorAll(triggers)
  }

  init() {
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        const sibling = button.closest('.module__info-show').nextElementSibling
        sibling.classList .toggle('msg')
        sibling.style.marginTop = '20px'
      })
    })
  }
}