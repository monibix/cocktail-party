console.log("javascript")

//Evento para mostrar formulario update-profile
const button = document.querySelector(".update-user-button")
button.addEventListener('click', () => {
const form = document.querySelector("#user-profile-form")
    form.style.display = 'inline';
});

function mostrarContrasena(){
    let tipo = document.getElementById("password");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}
