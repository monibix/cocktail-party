console.log("javascript")

// //Evento para mostrar formulario update-profile
// const button = document.querySelector(".update-user-button")
// button.addEventListener('click', () => {
// const form = document.querySelector("#user-profile-form")
//     form.style.display = 'inline';
// });

// function mostrarContrasena(){
//     var tipo = document.getElementById("password");
//     if(tipo.type == "password"){
//         tipo.type = "text";
//     }else{
//         tipo.type = "password";
//     }
// }

/*CHAT FEATURE*/
// let socket = io();
// /* Para ver el chat en consola */
// var form = document.getElementById('form');
// var input = document.getElementById('input');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     if (input.value) {
//         socket.emit('chat message', input.value);
//         input.value = '';
//     }
// });

/*CHAT WITHOUT SOCKET.IO*/
var form = document.getElementById('form');
var input = document.getElementById('input');
let screen = document.querySelector('.chat-screen p')
console.log("SCREEN", screen)
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const parrafo = document.createElement('p')
    parrafo.innerHTML = input.value
    screen.appendChild(parrafo)
    input.value = ""

});