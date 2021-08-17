import './style.css'

document.querySelector('.app').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

document.querySelector('[data-js="button"]').addEventListener('click', (event) => {
  event.preventDefault()
  if(document.querySelector('.app').style.display === 'none'){
    document.querySelector('.app').style.display = 'block'
  } else{
    document.querySelector('.app').style.display = 'none'
  }
})
