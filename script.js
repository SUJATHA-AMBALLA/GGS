// Replace this single URL when the external registration form is ready.
const REGISTRATION_URL = '#';
const registerLink = document.getElementById('registerLink');
registerLink.href = REGISTRATION_URL;
registerLink.addEventListener('click', (event) => {
  if (REGISTRATION_URL === '#') {
    event.preventDefault();
    alert('Registration link to be connected. Replace REGISTRATION_URL in script.js with the external registration form URL.');
  }
});
