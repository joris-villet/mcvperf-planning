
const axios = require('axios');


const btn = document.querySelector('#register-rdv');
btn.addEventListener('click', (event) => {
  event.preventDefault();
  
  const payload = {
    name: document.querySelector('#name').value,
    car: document.querySelector('#car').value,
    purpose: document.querySelector('#purpose').value,
    phone: document.querySelector('#phone').value,
    date: document.querySelector('#date').value,
  }

  axios.post('http://localhost:3333/rdv/create', payload)
    .then(({ data }) => console.log(data))
    .catch((err) => console.log(err))

})


const iconBook = document.querySelector('.fa-address-book');
if (window.location.pathname === "/rendez-vous") {
  iconBook.style.color = "#fff";
  iconBook.style.opacity = "1";
}

