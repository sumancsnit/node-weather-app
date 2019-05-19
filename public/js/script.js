/* eslint-disable no-unused-vars */
console.log('client side js is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data)
//   })
// })

// fetch('http://localhost:3000/weather?address=!').then((res) => {
//   res.json().then((data) => {
//     if (data.error) {
//       console.log(data.error)
//     } else {
//       console.log(data.location)
//       console.log(data.forecast)
//     }
//   })
// })

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('#outputMessage')

weatherform.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  message.innerHTML = `<p class="alert alert-primary">Loading...</p>`

  fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        message.innerHTML = `<p class="alert alert-danger">${data.error}</p>`
        console.log(data.error)
      } else {
        message.innerHTML = ` <div class="alert alert-success"> <h4 class="alert-heading">${data.location}</h4> <p class="alert-heading">${data.forecast}</p> </div>`
      }
    })
  })
})
