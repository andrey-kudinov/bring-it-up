export class Difference {
  constructor(oldOfficer, newOfficer, items) {
    this.oldOfficer = document.querySelector(oldOfficer)
    this.newOfficer = document.querySelector(newOfficer)
    this.oldItems = this.oldOfficer.querySelectorAll(items)
    this.newItems = this.newOfficer.querySelectorAll(items)
    this.oldCounter = 0
    this.newCounter = 0
  }

  bindTriggers({container, items, counter}) {
    container.querySelector('.plus').addEventListener('click', () => {
      if (counter !== items.length - 2) {
        items[counter].classList.add('animated', 'fadeIn')
        items[counter].style.display = 'flex'
        counter++
      } else {
        items[counter].style.display = 'flex'
        items[items.length - 1].remove()
      }
    })
  }

  hideItems(items) {
    items.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none'
      }
    })
  }

  init() {
    this.hideItems(this.oldItems)
    this.hideItems(this.newItems)
    
    this.bindTriggers({
      container: this.oldOfficer,
      items: this.oldItems,
      counter: this.oldCounter
    })
    this.bindTriggers({
      container: this.newOfficer,
      items: this.newItems,
      counter: this.newCounter
    })
  }
}
