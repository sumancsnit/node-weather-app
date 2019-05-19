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
