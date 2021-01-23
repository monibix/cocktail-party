console.log("javascript")

//Evento para mostrar formulario update-profile
const button = document.querySelector(".update-user-button")
button.addEventListener('click', () => {
const form = document.querySelector("#user-profile-form")
    form.style.display = 'inline';
});