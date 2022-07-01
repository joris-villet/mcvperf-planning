
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


const iconBook = document.querySelector('.fa-address-book');
if (window.location.pathname === "/rendez-vous") {
  iconBook.style.color = "#fff";
  iconBook.style.opacity = "1";
}

