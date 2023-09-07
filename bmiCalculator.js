const button = document.querySelector('button')
const result = document.querySelector('#result')
const input = document.querySelectorAll('input')
const w = document.querySelector('#weight')
const h = document.querySelector('#height')

    button.addEventListener('click', () => {
      button.style.opacity = '0.5'
      setTimeout ( () => {
        button.style.opacity = '1'
      }, 10)

      let weight = w.value
      let height = h.value
      let bmi = weight / (height ** 2)
      result.textContent = `Your BMI is ${bmi.toFixed(2)}`

      w.value = ''
      h.value = ''
    })
