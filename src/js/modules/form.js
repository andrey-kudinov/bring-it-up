export class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms)
    this.inputs = document.querySelectorAll('input')
    this.message = {
      loading: 'Loading...',
      success: 'Success!',
      error: 'Error!'
    }
    this.path = 'assets/question.php'
  }

  clearInputs() {
    this.inputs.forEach(input => {
      input.value = ''
    })
  }

  checkMailInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]')

    mailInputs.forEach(input => {
      input.addEventListener('keypress', (e) => {
        if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
          e.preventDefault()
        }
      })
    })
  }

  async postData(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      body: data
    })

    return await res.text()
  }

  initMask() {
    function setCursorPosition(position, element) {
      element.focus()
      element.setSelectionRange(position, position)
    }

    function createMask(event) {
      const matrix = '+1 (___) ___ __ __',
      def = matrix.replace(/\D/g, '')
        
      let i = 0,
        value = this.value.replace(/\D/g, '')

      if(def.length >= value.length) {
        value = def
      }

      this.value = matrix.replace(/./g, (a) => {
        return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : a
      })

      if(event.type === 'blur') {
        if(this.value.length === 2) {
          this.value = ''
        }
      } else {
        setCursorPosition(this.value.length, this)
      }
    }
  
    const inputs = document.querySelectorAll('[name="phone"]')
  
    inputs.forEach(input => {
      input.addEventListener('input', createMask)
      input.addEventListener('focus', createMask)
      input.addEventListener('blur', createMask)
    })
  }

  init() {
    this.checkMailInputs()
    this.initMask()

    this.forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault()

        const statusMsg = document.createElement('div')
        statusMsg.style.cssText = `
          margin-top: 15px;
          font-size: 18px;
          color: grey;
        `
        form.parentNode.appendChild(statusMsg)

        statusMsg.textContent = this.message.loading

        const formData = new FormData(form)

        this.postData(this.path, formData)
          .then(res => {
            console.log(res)
            statusMsg.textContent = this.message.success
          })
          .catch(() => {
            statusMsg.textContent = this.message.error
          })
          .finally(() => {
            this.clearInputs()
            setTimeout(() => {
              statusMsg.remove()
            }, 5000);
          })
      })
    })
  }
}