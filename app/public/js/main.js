
const btn = document.querySelector('#register-rdv');
btn.addEventListener('click', (event) => {
  event.preventDefault();
  
  const payload = {
    lastname: document.querySelector('#lastname').value,
    car: document.querySelector('#car').value,
    purpose: document.querySelector('#purpose').value,
    date: document.querySelector('#date').value,
  }

  console.log(payload)
  // request ici
})

